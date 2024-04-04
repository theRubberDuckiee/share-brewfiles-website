import type { BrewEntry, BrewsItem } from "@/types/brews";
import { brewfileLinkDictionary } from "./getBrewfileLink";

const createBrewLink = (brew: BrewEntry) =>
  `<li><a href="${
    brewfileLinkDictionary[brew.name]
  }" data-brewlink class="flex items-center gap-2 focus:outline-none transition-all focus-visible:ring-4 ring-offset-4 leading-tight ring-offset-bkg hover:bg-white/20 ring-accent-bluemedium rounded-full max-w-full break-all py-2 px-4" target="_blank"> ${
    brew.name
  }</a></li>`;

export const createBrewCard = (brew: BrewsItem) =>
  `<article class="bg-white/5 p-6 rounded-3xl backdrop-blur-4xl flex justify-between relative"><ul class="font-mono text-2xl uppercase tracking-widest">${brew.data
    .map(createBrewLink)
    .join(
      ""
    )}</ul><div class="flex flex-col justify-between z-50"><a aria-label="See full brewfile" href="/brew/${
    brew.id
  }" class="flex items-center gap-2 max-w-fit focus:outline-none transition-all focus-visible:ring-4 ring-offset-4 leading-tight ring-offset-bkg bg-accent-bluedark rounded-full hover:bg-accent-bluemedium ring-accent-bluemedium"><div class="bg-white/7 size-9 grid place-items-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" class="pointer-events-none" aria-hidden="true"><path fill="#fff" d="M18 1v13a1 1 0 0 1-2 0V3.414L1.708 17.707a1 1 0 0 1-1.415-1.415L14.586 2H4a1 1 0 0 1 0-2h13a1 1 0 0 1 1 1Z"></path></svg></div></a><div class="group"><div class="absolute bg-bkg p-4 pr-12 rounded-xl bottom-4 right-4 hidden group-hover:grid group-focus-within:grid"><ul class="grid gap-1"><li><strong>Name:</strong><a href="https://github.com/theRubberDuckiee" class="items-center gap-2 max-w-fit focus:outline-none transition-all focus-visible:ring-4 ring-offset-4 leading-tight ring-offset-bkg ring-accent-bluemedium underline inline hover:text-accent-bluemedium"> theRubberDuckiee </a></li><li><strong>Date:</strong> 3/29/2024</li><li><strong>Total:</strong> 7 packages</li></ul></div><a href="https://github.com/theRubberDuckiee" aria-label="Show uploader info" class="hover:bg-white/7 size-9 grid place-items-center rounded-full z-20 isolate focus:outline-none transition-all focus-visible:ring-4 ring-offset-4 ring-offset-bkg ring-accent-bluemedium"> <img src="https://avatars.githubusercontent.com/u/13528197?s=48&v=4" alt="theRubberDuckiee" class="rounded-full grayscale" width="35" height="35" loading="lazy" decoding="async"/> </a></div></div></article>`;
