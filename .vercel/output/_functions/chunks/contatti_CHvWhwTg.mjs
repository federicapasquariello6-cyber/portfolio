import { c as createComponent } from './astro-component_BIqsiMyj.mjs';
import 'piccolore';
import { o as createRenderInstruction, p as renderComponent, k as renderTemplate, m as maybeRenderHead } from './entrypoint_DzmdYMnq.mjs';
import { $ as $$Layout } from './Layout_DKCZkR0f.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Contatti = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contatti — Portfolio" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16 max-w-xl mx-auto"> <h1 class="text-4xl font-bold mb-4">Scrivimi</h1> <p class="text-gray-400 mb-10">
Rispondo di solito entro 24 ore.
</p> <form id="contact-form" class="space-y-5"> <input id="nome" name="nome" type="text" required placeholder="Nome" class="w-full border border-gray-700 bg-gray-900 rounded-lg px-4 py-3 text-white"> <input id="email" name="email" type="email" required placeholder="Email" class="w-full border border-gray-700 bg-gray-900 rounded-lg px-4 py-3 text-white"> <textarea id="messaggio" name="messaggio" rows="5" required placeholder="Messaggio" class="w-full border border-gray-700 bg-gray-900 rounded-lg px-4 py-3 text-white resize-none"></textarea> <button type="submit" class="w-full bg-white text-black py-3 rounded-lg font-medium hover:scale-105 transition">
Invia messaggio
</button> <p id="status" class="text-sm text-center hidden"></p> </form> </section> ${renderScript($$result2, "C:/Users/Utente/Desktop/Armonia/cd Desktop/src/pages/contatti.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/Utente/Desktop/Armonia/cd Desktop/src/pages/contatti.astro", void 0);

const $$file = "C:/Users/Utente/Desktop/Armonia/cd Desktop/src/pages/contatti.astro";
const $$url = "/contatti";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contatti,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
