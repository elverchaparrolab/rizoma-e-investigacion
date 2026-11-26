/* Inferencia local en un worker. No se usa una API de inferencia remota. */
let generator=null,busy=false,modelConfig=null;
self.onmessage=async event=>{
 const job=event.data;
 if(busy){self.postMessage({type:'error',message:'Hay una operación en curso.'});return;}
 busy=true;
 try{
  if(job.type==='load'){
   const {pipeline,env}=await import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1');
   env.allowLocalModels=false;env.useBrowserCache=true;
   env.backends.onnx.wasm.numThreads=1;
   const device=job.device==='wasm'?'wasm':navigator.gpu&&await navigator.gpu.requestAdapter()?'webgpu':'wasm';
   modelConfig={...job.model,device,dtype:'q4'};
   self.postMessage({type:'device',device,dtype:modelConfig.dtype});
   generator=await pipeline('text-generation',job.model.id,{device,dtype:modelConfig.dtype,revision:job.model.revision,progress_callback:progress=>self.postMessage({type:'progress',progress})});
   self.postMessage({type:'ready',model:modelConfig});
  }else if(job.type==='generate'){
   if(!generator)throw Error('Primero descarga y carga el modelo.');
   const result=await generator(job.messages,{max_new_tokens:380,do_sample:false,repetition_penalty:1.08,return_full_text:false});
   let text=result[0]?.generated_text;
   if(Array.isArray(text))text=text.at(-1)?.content;
   if(typeof text!=='string')throw Error('El modelo no produjo una respuesta de texto reconocible.');
   self.postMessage({type:'result',text,model:modelConfig});
  }
 }catch(error){self.postMessage({type:'error',message:String(error.message||error).slice(0,1200)});}
 finally{busy=false;}
};
