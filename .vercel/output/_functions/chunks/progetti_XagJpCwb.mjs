import { c as createComponent } from './astro-component_lUFkuSDG.mjs';
import 'piccolore';
import { p as renderComponent, k as renderTemplate, m as maybeRenderHead } from './entrypoint_CVKCoKCy.mjs';
import { $ as $$Layout } from './Layout_BkqPRvEh.mjs';

const $$Progetti = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Progetti;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Progetti - Portfolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16"> <h1 class="text-4xl font-bold mb-8">
I miei progetti
</h1> <div class="grid gap-6 md:grid-cols-2"> <div class="border rounded-xl p-6 hover:shadow-md transition"> <h2 class="text-xl font-semibold mb-2">Portfolio Astro</h2> <p class="text-gray-600">
Primo sito web creato con Astro e Tailwind.
</p> </div> <div class="border rounded-xl p-6 hover:shadow-md transition"> <h2 class="text-xl font-semibold mb-2">Progetto Armonia</h2> <p class="text-gray-600">
Esercizi e simulazioni.
</p> </div> </div> </section> ` })}`;
}, "C:/Users/Utente/Desktop/Armonia/cd Desktop/src/pages/progetti.astro", void 0);

const $$file = "C:/Users/Utente/Desktop/Armonia/cd Desktop/src/pages/progetti.astro";
const $$url = "/progetti";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Progetti,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
