import { PageFrame, PageFrameProps } from "./types"
import HeaderConstructor from "../Header"
import { pathToRoot } from "../../util/path"

const Header = HeaderConstructor()

/**
 * The default page frame — three-column layout with left sidebar, center
 * content (header + body + afterBody), and right sidebar, followed by a footer.
 *
 * This is the original Quartz layout, extracted from renderPage.tsx.
 */
export const DefaultFrame: PageFrame = {
  name: "default",
  render({
    componentData,
    header,
    beforeBody,
    pageBody: Content,
    afterBody,
    left,
    right,
    footer,
  }: PageFrameProps) {
    const root = pathToRoot(componentData.fileData.slug!)
    return (
      <>
        <div class="left sidebar">
          <section class="mooc-author" aria-label="Autor del sitio">
            <a href="https://elverchaparrolab.wordpress.com/acerca-de/" aria-label="Perfil de Elver Chaparro Cardozo">
              <img src={`${root}/static/elver-chaparro-cardozo.jpg`} alt="Elver Chaparro Cardozo" width="128" height="128" />
            </a>
            <p><strong>Elver Chaparro Cardozo</strong><br />Autor · Investigador y docente</p>
            <nav aria-label="Redes y perfiles de Elver Chaparro" class="mooc-social-links">
              <a href="https://github.com/elverchaparrolab">GitHub</a>
              <a href="https://www.linkedin.com/in/elver-chaparro-26544a100/">LinkedIn</a>
              <a href="https://www.instagram.com/elvervisual.chaparro/">Instagram</a>
              <a href="https://x.com/investigiumlab">X</a>
              <a href="https://wa.me/573115376326">WhatsApp</a>
              <a href="mailto:investigium.lab@gmail.com">Correo</a>
              <a href="https://scholar.google.com/citations?hl=es&user=ZXOKubwAAAAJ">Google Scholar</a>
              <a href="https://www.researchgate.net/profile/Elver-Chaparro-Cardozo">ResearchGate</a>
            </nav>
          </section>
          {left.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
        <div class="center">
          <div class="page-header">
            <nav class="mooc-return-links" aria-label="Regresar y explorar">
              <a href={root}>Inicio de Rizoma e investigación</a>
              <a href="https://elverchaparrolab.wordpress.com/">Sitio principal</a>
              <a href="https://elverchaparrolab.wordpress.com/contenido/">Contenidos y herramientas</a>
              <a href="https://elverchaparrolab.github.io/elver.chaparro-LAB/">Jardín digital</a>
            </nav>
            <div class="idioma notranslate" translate="no" role="group" aria-label="Idioma">
              <a data-lang="es" href="https://elverchaparrolab.github.io/rizoma-e-investigacion/" aria-current="true" title="Español">ES</a>
              <a data-lang="en" href="https://elverchaparrolab-github-io.translate.goog/rizoma-e-investigacion/?_x_tr_sl=es&_x_tr_tl=en&_x_tr_hl=es" title="English (traducción automática)">EN</a>
              <a data-lang="pt" href="https://elverchaparrolab-github-io.translate.goog/rizoma-e-investigacion/?_x_tr_sl=es&_x_tr_tl=pt&_x_tr_hl=es" title="Português (tradução automática)">PT</a>
            </div>
            <script dangerouslySetInnerHTML={{ __html: '(function(){var O="https://elverchaparrolab.github.io",T="https://elverchaparrolab-github-io.translate.goog",p=location.pathname,cur="es";try{var tl=new URLSearchParams(location.search).get("_x_tr_tl");if(location.hostname.slice(-14)==="translate.goog"&&tl)cur=tl.slice(0,2)}catch(e){}var D={es:O+p,en:T+p+"?_x_tr_sl=es&_x_tr_tl=en&_x_tr_hl=es",pt:T+p+"?_x_tr_sl=es&_x_tr_tl=pt&_x_tr_hl=es"};document.querySelectorAll(".idioma a[data-lang]").forEach(function(a){var l=a.getAttribute("data-lang");a.href=D[l];if(l===cur)a.setAttribute("aria-current","true");else a.removeAttribute("aria-current");a.addEventListener("click",function(e){e.preventDefault();e.stopPropagation();if(l===cur)return;try{window.top.location.href=D[l]}catch(_){location.href=D[l]}},true)})})();' }} />
            <p class="mooc-autoria">
              <span class="eb">Metodologías de investigación</span>
              <strong>Rizoma e investigación</strong> · Desarrollado por <strong>Elver Chaparro Cardozo</strong> · © 2026 · Algunos derechos reservados (CC BY-NC-SA 4.0)
            </p>
            <Header {...componentData}>
              {header.map((HeaderComponent) => (
                <HeaderComponent {...componentData} />
              ))}
            </Header>
            <div class="popover-hint">
              {beforeBody.map((BodyComponent) => (
                <BodyComponent {...componentData} />
              ))}
            </div>
          </div>
          <Content {...componentData} />
          <hr />
          <div class="page-footer">
            {afterBody.map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
            <section class="mooc-content-license" aria-label="Licencia Creative Commons de los contenidos">
              <h2>Licencia de los contenidos</h2>
              <p>«Rizoma e investigación», desarrollado por Elver Chaparro Cardozo. © {new Date().getFullYear()} Elver Chaparro Cardozo. Los contenidos originales de este sitio se comparten bajo la licencia <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es">Creative Commons Atribución–NoComercial–CompartirIgual 4.0 (CC BY-NC-SA 4.0)</a>.</p>
              <p>Puede compartir y adaptar estos contenidos citando al autor, enlazando la licencia e indicando los cambios, sin fines comerciales y compartiendo las adaptaciones bajo la misma licencia.</p>
              <p>Las citas, imágenes, esquemas y materiales de terceros conservan sus derechos y licencias originales. El software Quartz conserva su licencia MIT.</p>
              <p><a href="https://elverchaparrolab.github.io/elver.chaparro-LAB/licencia">Consultar el aviso común de licencia</a></p>
            </section>
          </div>
        </div>
        <div class="right sidebar">
          {right.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
        {footer.map((FooterComponent) => (
          <FooterComponent {...componentData} />
        ))}
      </>
    )
  },
}
