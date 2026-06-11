import { c as createComponent } from './astro-component_lUFkuSDG.mjs';
import 'piccolore';
import { q as renderHead, v as renderSlot, k as renderTemplate } from './entrypoint_CVKCoKCy.mjs';
import 'clsx';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "FP Portfolio" } = Astro2.props;
  return renderTemplate`<html lang="it"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title>${renderHead()}</head> <body class="bg-gray-950 text-white min-h-screen"> <nav class="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center"> <a href="/" class="font-bold text-lg tracking-wide">
FP • Portfolio
</a> <div class="flex gap-6 text-sm text-gray-300"> <a href="/" class="hover:text-white transition">Home</a> <a href="/progetti" class="hover:text-white transition">Progetti</a> <a href="/contatti" class="hover:text-white transition">Contatti</a> </div> </nav> <main class="max-w-5xl mx-auto px-6 py-10"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/Utente/Desktop/Armonia/cd Desktop/src/layout/Layout.astro", void 0);

export { $$Layout as $ };
