import type { Brews } from "@/types/brews";

const numUploaded = document.getElementById("num_uploaded") as HTMLSpanElement;

const incrementCounter = setInterval(() => {
  numUploaded.textContent = (
    parseInt(numUploaded.textContent as string) + 1
  ).toString();
}, 100);

try {
  const res = await fetch(`/api/getBrewfiles.json`);
  const brewfiles: Brews = await res.json();
  clearInterval(incrementCounter);
  numUploaded.classList.remove("w-3");
  numUploaded.textContent = brewfiles.brews.length.toString();
} catch (e) {
  console.error(e);
  clearInterval(incrementCounter);
  numUploaded.textContent = "0";
}

// expand info panel
const infoBtn = document.getElementById("info-btn") as HTMLButtonElement;
const infoPanel = document.getElementById("info-panel") as HTMLDivElement;
const navBtn = document.getElementById("nav-btn") as HTMLButtonElement;
const navPanel = document.getElementById("nav-panel") as HTMLDivElement;
const backdrop = document.getElementById("backdrop") as HTMLDivElement;
const mainTag = document.querySelector("main") as HTMLDivElement;

const closeAllPanels = () => {
  infoPanel.classList.add("hidden");
  infoPanel.classList.remove("grid");
  navPanel.classList.add("hidden");
  navPanel.classList.remove("grid");
  infoBtn.setAttribute("aria-expanded", "false");
  navBtn.setAttribute("aria-pressed", "false");
  backdrop.classList.add("hidden");
  mainTag.removeAttribute("inert");
};

const expandPanel = ({
  panelToExpand,
  btnToExpand,
}: {
  panelToExpand: typeof infoPanel | typeof navPanel;
  btnToExpand: typeof infoBtn | typeof navBtn;
}) => {
  backdrop.classList.remove("hidden");
  mainTag.setAttribute("inert", "");
  panelToExpand.classList.remove("hidden");
  panelToExpand.classList.add("grid");
  btnToExpand.setAttribute("aria-expanded", "true");
  btnToExpand.setAttribute("aria-pressed", "true");
  panelToExpand.focus();
};

const togglePanel = ({
  panelToExpand,
  btnToExpand,
}: {
  panelToExpand: typeof infoPanel | typeof navPanel;
  btnToExpand: typeof infoBtn | typeof navBtn;
}) => {
  const isAnyPanelExpanded =
    infoPanel.classList.contains("grid") || navPanel.classList.contains("grid");
  const isClickedPanelExpanded = panelToExpand?.classList.contains("grid");

  if (isAnyPanelExpanded) {
    closeAllPanels();
  }

  if (!isClickedPanelExpanded) {
    expandPanel({ panelToExpand, btnToExpand });
  }
};

backdrop.addEventListener("click", closeAllPanels);
infoBtn.addEventListener("click", () =>
  togglePanel({ panelToExpand: infoPanel, btnToExpand: infoBtn })
);
navBtn.addEventListener("click", () =>
  togglePanel({ panelToExpand: navPanel, btnToExpand: navBtn })
);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && infoPanel.classList.contains("grid")) {
    const btnToFocus = infoPanel.classList.contains("grid") ? infoBtn : navBtn;
    closeAllPanels();
    btnToFocus.focus();
  }
});
