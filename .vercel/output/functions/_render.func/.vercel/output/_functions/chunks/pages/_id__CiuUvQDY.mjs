/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, f as renderComponent, u as unescapeHTML, F as Fragment, g as renderSlot, h as renderHead } from '../astro_B-zFvGWO.mjs';
import 'kleur/colors';
import 'clsx';
import { getIconData, iconToSVG } from '@iconify/utils';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const $$Astro$9 = createAstro();
const $$PackageRow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$PackageRow;
  const { entry, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="relative"> ${index !== 10 && renderTemplate`<div class="absolute -bottom-2 border-b border-white/15 w-[2200px] -ml-[20%]"></div>`} <a href="/" class="p-2 relative flex justify-between items-center font-mono hover:bg-white/5 rounded-3xl ring-accent-bluemedium focus:outline-none transition-all focus-visible:ring-4 ring-offset-4 ring-offset-bkg" data-row> <div class="flex gap-8 items-center"> <p class="text-white/50 text-5xl px-8 py-6 bg-white/5 max-w-fit rounded-2xl leading-none"> ${index.toString().padStart(2, "0")} </p> <p class="text-5xl uppercase tracking-widest"${addAttribute(`entry-${index}`, "id")}> <!-- randomize letters up to 10 characters --> ${setInterval(
    () => [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p"
    ],
    200
  )} </p> </div> <p class="text-5xl uppercase tracking-widest"${addAttribute(`downloads-${index}`, "id")}> ${entry.downloads.toString().padStart(3, "0")} </p> </a> </li> `;
}, "/Users/chris.pennington/cip/Warp/share-brewfiles-website/src/components/leaderboard/PackageRow.astro", void 0);

const baseData = {
  title: "Share Brewfiles",
  description: "Share your brewfiles with others"
};
const keyLinks = {
  github: "https://github.com/Share-Brewfiles",
  npm: "https://www.npmjs.com/package/share-brewfiles"
};
const contributors = [
  {
    name: "Jess Wang",
    role: "Dev Rel",
    href: "https://twitter.com/daRubberDuckiee"
  },
  {
    name: "Chris Pennington",
    role: "Dev",
    href: "https://twitter.com/cpenned"
  },
  {
    name: "Kyle Ribant",
    role: "Design",
    href: "/"
  }
];

const $$Astro$8 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/chris.pennington/cip/Warp/share-brewfiles-website/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$7 = createAstro();
const $$Lines = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Lines;
  return renderTemplate`${maybeRenderHead()}<div class="absolute inset-0 flex justify-between -z-10"> <div class="w-8 h-full border-r border-white/15 hidden md:block"></div> <div class="w-4 h-full border-x border-white/15"></div> <div class="w-4 h-full border-x border-white/15"></div> <div class="w-4 h-full border-x border-white/15"></div> <div class="w-8 h-full border-l border-white/15 hidden md:block"></div> </div>`;
}, "/Users/chris.pennington/cip/Warp/share-brewfiles-website/src/components/ui/Lines.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1710852258,"icons":{"external-link":{"body":"<path fill=\"#fff\" d=\"M18 1v13a1 1 0 0 1-2 0V3.414L1.708 17.708a1 1 0 0 1-1.415-1.415L14.586 2H4a1 1 0 0 1 0-2h13a1 1 0 0 1 1 1Z\"/>","width":18,"height":18},"hamburger":{"body":"<path fill=\"none\" stroke=\"#fff\" d=\"M.5 1h16M.5 11h16\"/>","width":17,"height":12},"info":{"body":"<path fill=\"#fff\" d=\"M13.313 17a.563.563 0 0 1-.563.563 1.313 1.313 0 0 1-1.312-1.313V12.5a.187.187 0 0 0-.188-.187.562.562 0 1 1 0-1.126 1.313 1.313 0 0 1 1.313 1.313v3.75a.188.188 0 0 0 .187.188.563.563 0 0 1 .563.562Zm-1.688-7.687a.938.938 0 1 0 0-1.876.938.938 0 0 0 0 1.875Zm9.938 3.187A9.562 9.562 0 1 1 12 2.938a9.574 9.574 0 0 1 9.563 9.562Zm-1.125 0A8.437 8.437 0 1 0 12 20.938a8.447 8.447 0 0 0 8.438-8.438Z\"/>","width":24,"height":25},"trophy":{"body":"<path fill=\"#7EB1FD\" d=\"M58 16.5h-6.5V14a3.5 3.5 0 0 0-3.5-3.5H16a3.5 3.5 0 0 0-3.5 3.5v2.5H6A3.5 3.5 0 0 0 2.5 20v4a9.5 9.5 0 0 0 9.5 9.5h1.285A19.5 19.5 0 0 0 30.5 47.438V54.5H24a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3h-6.5v-7.062c8.11-.63 14.858-6.326 17.155-13.938H52a9.5 9.5 0 0 0 9.5-9.5v-4a3.5 3.5 0 0 0-3.5-3.5Zm-46 14A6.5 6.5 0 0 1 5.5 24v-4a.5.5 0 0 1 .5-.5h6.5V28c.002.836.057 1.67.162 2.5H12Zm20.125 14A16.5 16.5 0 0 1 15.5 28V14a.5.5 0 0 1 .5-.5h32a.5.5 0 0 1 .5.5v13.775c0 9.155-7.345 16.658-16.375 16.725ZM58.5 24a6.5 6.5 0 0 1-6.5 6.5h-.693c.128-.903.192-1.813.193-2.725V19.5H58a.5.5 0 0 1 .5.5v4Z\"/>","width":64,"height":64}}}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$6 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/Users/chris.pennington/cip/Warp/share-brewfiles-website/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$5 = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Link;
  const link = cva(
    "flex items-center gap-2 max-w-fit focus:outline-none transition-all focus-visible:ring-4 ring-offset-4 leading-tight ring-offset-bkg",
    {
      variants: {
        variant: {
          default: "bg-white/10  ring-accent-bluemedium rounded-full hover:bg-white/20",
          accent: "bg-accent-bluedark rounded-full hover:bg-accent-bluemedium  ring-accent-bluemedium",
          text: "ring-accent-bluemedium rounded-full hover:bg-white/10 hover:backdrop-blur-3xl",
          icon: ""
        },
        size: {
          default: "py-2 px-4",
          large: "px-8 py-3 gap-4 text-2xl",
          icon: ""
        }
      },
      defaultVariants: {
        variant: "default",
        size: "default"
      }
    }
  );
  const { classes, size, href, variant, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([twMerge(link({ size, variant }), classes)], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/chris.pennington/cip/Warp/share-brewfiles-website/src/components/ui/Link.astro", void 0);

const $$Astro$4 = createAstro();
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<code class="text-white/75 bg-white/10 px-3 py-2 rounded-lg max-w-fit"> ${renderSlot($$result, $$slots["default"])} </code>`;
}, "/Users/chris.pennington/cip/Warp/share-brewfiles-website/src/components/ui/Code.astro", void 0);

const $$Astro$3 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<div id="backdrop" class="hidden absolute inset-0 z-40"></div> <nav class="relative mt-4 flex justify-self-center z-50"> <div class="flex gap-4 items-center backdrop-blur-4xl py-2 px-4 rounded-full z-50 bg-white/7"> ${renderComponent($$result, "Icon", $$Icon, { "name": "hamburger", "size": 16, "aria-hidden": "true" })} ${renderComponent($$result, "Link", $$Link, { "href": "/" }, { "default": ($$result2) => renderTemplate`Share Brewfiles` })} <p class="flex gap-1"> <span id="num_uploaded" class="w-3">0</span> files uploaded
</p> <button id="info-btn" aria-label="Show Info" aria-expanded="false" aria-pressed="false" aria-controls="panel" class="aria-pressed:bg-white/7 hover:bg-white/7 size-9 grid place-items-center rounded-full z-20 focus:outline-none transition-all focus-visible:ring-4 ring-offset-4 ring-offset-bkg ring-accent-bluemedium"> ${renderComponent($$result, "Icon", $$Icon, { "name": "info", "size": 24, "aria-hidden": "true" })} </button> </div> <div aria-labelledby="info-btn" id="panel" class="hidden gap-8 bg-white/5 rounded-[32px] absolute -inset-x-2 -top-2 backdrop-blur-3xl shadow-custom px-5 pt-24 pb-8 text-white/75 z-40"> <div class="grid gap-4"> <div class="grid gap-2"> <p class="font-bolder text-2xl text-white">What is a Brewfile?</p> <p>
Homebrew is one of the most popular package managers for MacOS and
          Linux. People use it to download command-line tools (like tmux,
          LazyDocker, and NeoVim), libraries (like C, C++, and Rust), dev
          environments (like MySQL, Apache, and Nginx), and applications (like
          Warp, Raycast, or Zoom).
</p> </div> <p>
Brewfiles is just a simple txt file that includes all packages and
        applications that are installed on the system via Homebrew.
</p> </div> <div class="grid gap-4"> <p class="font-bolder text-2xl text-white">Uploading a Brewfile</p> <p>
To upload your brewfile, run the following command in your terminal:
</p> ${renderComponent($$result, "Code", $$Code, {}, { "default": ($$result2) => renderTemplate`npx dockhunt` })} <p>The command will:</p> <ol class="list-inside list-decimal"> <li>Find the apps in your dock</li> <li>Upload any icons not yet in our database</li> <li>Create a dock on this website</li> </ol> ${renderComponent($$result, "Link", $$Link, { "href": keyLinks.github }, { "default": ($$result2) => renderTemplate`<span>View source code on Github</span> <div class="bg-white/7 size-9 grid place-items-center rounded-full -mr-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "external-link", "size": 13, "aria-hidden": "true" })} </div> ` })} ${renderComponent($$result, "Link", $$Link, { "href": keyLinks.npm }, { "default": ($$result2) => renderTemplate`<span>View npm package</span> <div class="bg-white/7 size-9 grid place-items-center rounded-full -mr-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "external-link", "size": 13, "aria-hidden": "true" })} </div> ` })} </div> </div> </nav> `;
}, "/Users/chris.pennington/cip/Warp/share-brewfiles-website/src/components/Nav.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="grid place-items-center p-6"> <div class="flex gap-4 flex-wrap flex-col md:flex-row items-center backdrop-blur-4xl py-4 md:py-2 pl-4 pr-2 rounded-lg sm:rounded-[32px] bg-white/7 max-w-fit mx-auto mb-4"> <p>Thank you to</p> <div class="flex gap-2 flex-col md:flex-row items-center flex-wrap max-w-fit"> ${contributors.map((c) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": c.href }, { "default": ($$result2) => renderTemplate` <span>${c.name}</span> <span class="text-white/50">${c.role}</span> ` })}`)} </div> </div> </footer>`;
}, "/Users/chris.pennington/cip/Warp/share-brewfiles-website/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = baseData.title, description = baseData.description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="theme-color" content="#111111"><meta name="color-scheme" content="dark"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-bkg text-white leading-[1.35]"> <div class="max-w-[2200px] mx-auto relative min-h-screen overflow-hidden"> ${renderComponent($$result, "Lines", $$Lines, {})} <div class="grid gap-8"> ${renderComponent($$result, "Nav", $$Nav, {})} <main class="grid gap-20"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </div>  </body> </html>`;
}, "/Users/chris.pennington/cip/Warp/share-brewfiles-website/src/layouts/BaseLayout.astro", void 0);

const brews = [
	{
		id: "0gkIBFvI3ikB06XSM6Up",
		data: [
			{
				name: "\"acarl005/formulas\"",
				packageManager: "tap"
			},
			{
				name: "\"getsentry/tools\"",
				packageManager: "tap"
			},
			{
				name: "\"homebrew/bundle\"",
				packageManager: "tap"
			},
			{
				name: "\"homebrew/cask-fonts\"",
				packageManager: "tap"
			},
			{
				name: "\"homebrew/services\"",
				packageManager: "tap"
			},
			{
				name: "\"jandedobbeleer/oh-my-posh\"",
				packageManager: "tap"
			},
			{
				name: "\"python@3.11\"",
				packageManager: "brew"
			},
			{
				name: "\"asciinema\"",
				packageManager: "brew"
			},
			{
				name: "\"autojump\"",
				packageManager: "brew"
			},
			{
				name: "\"berkeley-db\"",
				packageManager: "brew"
			},
			{
				name: "\"carthage\"",
				packageManager: "brew"
			},
			{
				name: "\"clang-format\"",
				packageManager: "brew"
			},
			{
				name: "\"create-dmg\"",
				packageManager: "brew"
			},
			{
				name: "\"dbus\"",
				packageManager: "brew"
			},
			{
				name: "\"ddgr\"",
				packageManager: "brew"
			},
			{
				name: "\"docker\"",
				packageManager: "brew"
			},
			{
				name: "\"docker-compose\"",
				packageManager: "brew"
			},
			{
				name: "\"libssh2\"",
				packageManager: "brew"
			},
			{
				name: "\"exa\"",
				packageManager: "brew"
			},
			{
				name: "\"eza\"",
				packageManager: "brew"
			},
			{
				name: "\"unbound\"",
				packageManager: "brew"
			},
			{
				name: "\"ffmpeg\"",
				packageManager: "brew"
			},
			{
				name: "\"figlet\"",
				packageManager: "brew"
			},
			{
				name: "\"ncurses\"",
				packageManager: "brew"
			},
			{
				name: "\"fish\"",
				packageManager: "brew"
			},
			{
				name: "\"fzf\"",
				packageManager: "brew"
			},
			{
				name: "\"gh\"",
				packageManager: "brew"
			},
			{
				name: "\"jq\"",
				packageManager: "brew"
			},
			{
				name: "\"kubernetes-cli\"",
				packageManager: "brew"
			},
			{
				name: "\"libtensorflow\"",
				packageManager: "brew"
			},
			{
				name: "\"lolcat\"",
				packageManager: "brew"
			},
			{
				name: "\"multitime\"",
				packageManager: "brew"
			},
			{
				name: "\"navi\"",
				packageManager: "brew"
			},
			{
				name: "\"node\"",
				packageManager: "brew"
			},
			{
				name: "\"nyancat\"",
				packageManager: "brew"
			},
			{
				name: "\"openssl@1.1\"",
				packageManager: "brew"
			},
			{
				name: "\"tree\"",
				packageManager: "brew"
			},
			{
				name: "\"pass\"",
				packageManager: "brew"
			},
			{
				name: "\"pastel\"",
				packageManager: "brew"
			},
			{
				name: "\"perl\"",
				packageManager: "brew"
			},
			{
				name: "\"pyenv\"",
				packageManager: "brew"
			},
			{
				name: "\"python@3.10\"",
				packageManager: "brew"
			},
			{
				name: "\"ruby\"",
				packageManager: "brew"
			},
			{
				name: "\"rust\"",
				packageManager: "brew"
			},
			{
				name: "\"spotify-tui\"",
				packageManager: "brew"
			},
			{
				name: "\"telnet\"",
				packageManager: "brew"
			},
			{
				name: "\"tmux\"",
				packageManager: "brew"
			},
			{
				name: "\"vhs\"",
				packageManager: "brew"
			},
			{
				name: "\"vim\"",
				packageManager: "brew"
			},
			{
				name: "\"yarn\"",
				packageManager: "brew"
			},
			{
				name: "\"acarl005/formulas/ls-go\"",
				packageManager: "brew"
			},
			{
				name: "\"getsentry/tools/sentry-cli\"",
				packageManager: "brew"
			},
			{
				name: "\"jandedobbeleer/oh-my-posh/oh-my-posh\"",
				packageManager: "brew"
			},
			{
				name: "\"bierner.markdown-emoji\"",
				packageManager: "vscode"
			},
			{
				name: "\"dbaeumer.vscode-eslint\"",
				packageManager: "vscode"
			},
			{
				name: "\"esbenp.prettier-vscode\"",
				packageManager: "vscode"
			},
			{
				name: "\"haack.warp-companion\"",
				packageManager: "vscode"
			},
			{
				name: "\"ms-python.debugpy\"",
				packageManager: "vscode"
			},
			{
				name: "\"ms-python.isort\"",
				packageManager: "vscode"
			},
			{
				name: "\"ms-python.python\"",
				packageManager: "vscode"
			},
			{
				name: "\"ms-python.vscode-pylance\"",
				packageManager: "vscode"
			},
			{
				name: "\"ms-toolsai.jupyter\"",
				packageManager: "vscode"
			},
			{
				name: "\"ms-toolsai.jupyter-renderers\"",
				packageManager: "vscode"
			},
			{
				name: "\"ms-toolsai.vscode-jupyter-cell-tags\"",
				packageManager: "vscode"
			},
			{
				name: "\"ms-toolsai.vscode-jupyter-slideshow\"",
				packageManager: "vscode"
			}
		]
	}
];
const brewEntry = {
	brews: brews
};

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const entry = brewEntry.brews[0];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.id, "description": `Brewfiles for ${entry.id}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>UserId: ${entry.id}</h1> ${renderComponent($$result2, "BrewCard", $$PackageRow, { "entry": entry })} ` })}`;
}, "/Users/chris.pennington/cip/Warp/share-brewfiles-website/src/pages/brew/[id].astro", void 0);

const $$file = "/Users/chris.pennington/cip/Warp/share-brewfiles-website/src/pages/brew/[id].astro";
const $$url = "/brew/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Icon as $, _id_ as _, $$Link as a, $$PackageRow as b, $$BaseLayout as c, keyLinks as k };
