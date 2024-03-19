/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, n as defineScriptVars, e as addAttribute, o as createTransitionScope, m as maybeRenderHead } from '../astro_B-zFvGWO.mjs';
import 'kleur/colors';
import { c as $$BaseLayout } from './_id__CiuUvQDY.mjs';
/* empty css                            */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Success = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Success;
  const id = Astro2.url.searchParams.get("id");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Success!" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", "<h1>Success!</h1> <p", '>\nRedirecting to home in <span id="seconds">3</span> seconds...\n</p> <script>(function(){', '\n    function initRedirect() {\n      const seconds = document.getElementById("seconds");\n      let count = 3;\n      setInterval(() => {\n        if (count > 0) {\n          count--;\n          seconds.innerText = count;\n        }\n      }, 1000);\n\n      // redirect to brew/[id]\n      if (id) {\n        setTimeout(() => {\n          window.location.href = `/brew/${id}`;\n        }, 3000);\n      } else {\n        setTimeout(() => {\n          window.location.href = "/";\n        }, 3000);\n      }\n    }\n\n    document.addEventListener("astro:after-swap", initRedirect());\n    window.addEventListener("DOMContentLoaded", initRedirect());\n  })();<\/script> '], [" ", "<h1>Success!</h1> <p", '>\nRedirecting to home in <span id="seconds">3</span> seconds...\n</p> <script>(function(){', '\n    function initRedirect() {\n      const seconds = document.getElementById("seconds");\n      let count = 3;\n      setInterval(() => {\n        if (count > 0) {\n          count--;\n          seconds.innerText = count;\n        }\n      }, 1000);\n\n      // redirect to brew/[id]\n      if (id) {\n        setTimeout(() => {\n          window.location.href = \\`/brew/\\${id}\\`;\n        }, 3000);\n      } else {\n        setTimeout(() => {\n          window.location.href = "/";\n        }, 3000);\n      }\n    }\n\n    document.addEventListener("astro:after-swap", initRedirect());\n    window.addEventListener("DOMContentLoaded", initRedirect());\n  })();<\/script> '])), maybeRenderHead(), addAttribute(createTransitionScope($$result2, "xkc54673"), "data-astro-transition-persist"), defineScriptVars({ id })) })}`;
}, "/Users/chris.pennington/cip/Warp/share-brewfiles-website/src/pages/success.astro", "self");

const $$file = "/Users/chris.pennington/cip/Warp/share-brewfiles-website/src/pages/success.astro";
const $$url = "/success";

export { $$Success as default, $$file as file, $$url as url };
