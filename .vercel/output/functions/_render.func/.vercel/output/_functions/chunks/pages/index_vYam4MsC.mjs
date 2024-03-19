/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, e as addAttribute, g as renderSlot } from '../astro_B-zFvGWO.mjs';
import 'kleur/colors';
import { $ as $$Icon, k as keyLinks, a as $$Link, b as $$PackageRow, c as $$BaseLayout } from './_id__CiuUvQDY.mjs';
import 'clsx';
/* empty css                          */
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const $$Astro$5 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<header class="grid place-items-center gap-12 place-content-center min-h-[76vh]"> <h1 class="flex gap-2 flex-wrap font-mono text-7xl uppercase leading-none tracking-widest justify-center items-center"> <span class="px-8 py-5 bg-white/5 rounded-2xl backdrop-blur-4xl">Share
</span> <span class="px-8 py-5 bg-white/5 rounded-full backdrop-blur-4xl">your</span> <span class="px-8 py-5 bg-white/5 rounded-2xl backdrop-blur-4xl">Brewfiles</span> </h1> ${renderComponent($$result, "Link", $$Link, { "variant": "accent", "size": "large", "href": keyLinks.npm }, { "default": ($$result2) => renderTemplate`<span> Share Yours </span> <div class="bg-white/7 size-9 grid place-items-center rounded-full -mr-5"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "external-link", "size": 13, "aria-hidden": "true" })} </div> ` })} </header>`;
}, "/Users/chris.pennington/cip/Warp/share-brewfiles-website/src/components/Hero.astro", void 0);

const $$Astro$4 = createAstro();
const $$Marquee = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Marquee;
  const brews = [
    { name: "acar1005/formulas", color: "bg-accent-pink" },
    { name: "jandebobbeleer/oh-my-posh", color: "bg-accent-green" },
    { name: "python@3.11", color: "bg-accent-bluemedium" },
    { name: "autojump", color: "bg-accent-orange" },
    { name: "docker-compose", color: "bg-accent-teal" },
    { name: "exa", color: "bg-accent-pink" },
    { name: "ffmpeg", color: "bg-accent-green" },
    { name: "openssl@3", color: "bg-accent-bluemedium" },
    { name: "readline", color: "bg-accent-orange" },
    { name: "lazydocker", color: "bg-accent-teal" },
    { name: "fzf", color: "bg-accent-pink" },
    { name: "lolcat", color: "bg-accent-green" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="relative border-b pb-10 border-white/15 text-2xl" data-astro-cid-tpudeaz7> <div class="absolute flex overflow-x-hidden marquee w-full" data-astro-cid-tpudeaz7> <div class="animate-marquee whitespace-nowrap flex gap-12 px-6" data-astro-cid-tpudeaz7> ${brews.map((brew) => renderTemplate`<div class="flex gap-2 place-items-center" data-astro-cid-tpudeaz7> <p${addAttribute(["size-2 rounded-full", brew.color], "class:list")} data-astro-cid-tpudeaz7></p> <p data-astro-cid-tpudeaz7>${brew.name}</p> </div>`)} </div> <div class="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-12 px-6" data-astro-cid-tpudeaz7> ${brews.map((brew) => renderTemplate`<div class="flex gap-2 place-items-center" data-astro-cid-tpudeaz7> <p${addAttribute(["size-2 rounded-full", brew.color], "class:list")} data-astro-cid-tpudeaz7></p> <p data-astro-cid-tpudeaz7>${brew.name}</p> </div>`)} </div> </div> </div> `;
}, "/Users/chris.pennington/cip/Warp/share-brewfiles-website/src/components/Marquee.astro", void 0);

const $$Astro$3 = createAstro();
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Heading;
  const heading = cva("text-balance leading-heading", {
    variants: {
      variant: {
        default: "",
        accent: "text-accent"
      },
      uppercase: {
        true: "uppercase",
        false: ""
      },
      size: {
        sm: "text-xl",
        md: "text-2xl",
        lg: "text-8xl"
      }
    },
    defaultVariants: {
      uppercase: false,
      variant: "default",
      size: "md"
    }
  });
  const { classes, size, tagType, variant, uppercase, ...rest } = Astro2.props;
  const Tag = tagType;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [twMerge(heading({ size, variant, uppercase }), classes)], ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/chris.pennington/cip/Warp/share-brewfiles-website/src/components/ui/Heading.astro", void 0);

const initialData = [
  {
    name: "openssl@3",
    downloads: 160
  },
  {
    name: "xz",
    downloads: 75
  },
  {
    name: "gettext",
    downloads: 68
  },
  {
    name: "ca-certificates",
    downloads: 52
  },
  {
    name: "python@3.12",
    downloads: 25
  },
  {
    name: "python@3.11",
    downloads: 23
  },
  {
    name: "node",
    downloads: 20
  },
  {
    name: "readline",
    downloads: 16
  },
  {
    name: "icu4c",
    downloads: 7
  },
  {
    name: "vim",
    downloads: 5
  }
];

const $$Astro$2 = createAstro();
const $$LeaderboardList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LeaderboardList;
  return renderTemplate`${maybeRenderHead()}<ul class="grid gap-4" id="leaderboard-list"> ${initialData.map((entry, i) => renderTemplate`${renderComponent($$result, "PackageRow", $$PackageRow, { "entry": entry, "index": i + 1 })}`)} </ul> `;
}, "/Users/chris.pennington/cip/Warp/share-brewfiles-website/src/components/leaderboard/LeaderboardList.astro", void 0);

const $$Astro$1 = createAstro();
const $$LeadershipSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LeadershipSection;
  return renderTemplate`${maybeRenderHead()}<section class="container" aria-label="Brewfiles Leaderboard"> <div class="grid gap-20"> <div class="flex justify-between items-end flex-wrap"> ${renderComponent($$result, "Heading", $$Heading, { "tagType": "h2", "size": "lg", "classes": "flex items-center max-w-heading flex-wrap gap-2" }, { "default": ($$result2) => renderTemplate` <div class="flex gap-4"> <div class="px-12 py-6 bg-accent-bluemedium rounded-lg max-w-fit"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "trophy", "width": 59, "height": 47, "aria-hidden": "true" })} </div> <span>Who’s</span> </div> <span>in the lead?</span> ` })} ${renderComponent($$result, "Link", $$Link, { "href": "brewfiles", "size": "large", "variant": "text" }, { "default": ($$result2) => renderTemplate` <span>See all Brewfiles</span> <div class="bg-white/7 size-9 grid place-items-center rounded-full -mr-5"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "external-link", "size": 13, "aria-hidden": "true" })} </div> ` })} </div> <div class="grid gap-6"> <div class="flex justify-between text-white/50"> <div class="flex gap-4"> <p class="md:w-36">Rank</p> <p>Package</p> </div> <p>Downloads</p> </div> ${renderComponent($$result, "LeaderboardList", $$LeaderboardList, {})} </div> </div> </section>`;
}, "/Users/chris.pennington/cip/Warp/share-brewfiles-website/src/components/leaderboard/LeadershipSection.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Marquee", $$Marquee, {})} ${renderComponent($$result2, "Leaderboard", $$LeadershipSection, {})} ` })}`;
}, "/Users/chris.pennington/cip/Warp/share-brewfiles-website/src/pages/index.astro", void 0);

const $$file = "/Users/chris.pennington/cip/Warp/share-brewfiles-website/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
