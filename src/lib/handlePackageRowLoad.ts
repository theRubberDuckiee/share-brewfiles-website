import type { PackageCounted } from "@/types/packageEntry";
import { getRandomNumber, getRandomWord } from "./getRandomValue";
import initRowEventListeners from "./handleKeyboardForList";
import { brewfileLinkDictionary } from "./getBrewfileLink";

const dataRows = document.querySelectorAll(
  "[data-row]"
) as NodeListOf<HTMLAnchorElement>;

const packageNames = document.querySelectorAll(
  "[data-packageName]"
) as NodeListOf<HTMLParagraphElement>;

const packageLinks = document.querySelectorAll(
  "[link-packageName]"
) as NodeListOf<HTMLParagraphElement>;

const downloadValues = document.querySelectorAll(
  "[data-downloadValue]"
) as NodeListOf<HTMLParagraphElement>;

async function fetchLeaderboardData() {
  // fetch from api, but don't block the initial load
  const nameIntervals = new Map();
  const downloadIntervals = new Map();

  packageNames.forEach(async (p, i) => {
    nameIntervals.set(
      i,
      setInterval(() => (p.textContent = getRandomWord()), 60)
    );
  });

  downloadValues.forEach(async (p, i) => {
    downloadIntervals.set(
      i,
      setInterval(() => (p.textContent = getRandomNumber()), 60)
    );
  });

  // fetch data can update a, names, and downloads and clear intervals
  const req = await fetch(
    `/api/getBrewfiles.json?getTotals=true${
      dataRows.length < 11 && "&showOnlyTop10=true"
    }`
  );
  const data = (await req.json()) as PackageCounted[];

  data.forEach(({ name, downloads }, i) => {
    clearInterval(nameIntervals.get(i));
    clearInterval(downloadIntervals.get(i));
    packageNames[i].textContent = name;
    packageLinks[i].setAttribute("href", brewfileLinkDictionary[name])
    downloadValues[i].textContent = String(downloads);
    dataRows[i].href = `/`;
    // remove unused data items
    if (i === data.length - 1) {
      const remainingDataRows = [...dataRows].slice(i + 1);
      remainingDataRows.forEach((row) => {
        row.parentElement?.remove();
      });
    }
  });
  initRowEventListeners();
}

const leaderboardListUl = document.querySelector(
  "#leaderboard-list"
) as HTMLUListElement;

// intersection observer
const leadershipObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fetchLeaderboardData();
        leadershipObs.unobserve(leaderboardListUl);
      }
    });
  },
  { rootMargin: "-80px" }
);

leadershipObs.observe(leaderboardListUl);
