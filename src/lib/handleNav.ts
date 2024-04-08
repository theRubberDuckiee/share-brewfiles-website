import initRowEventListeners from "./handleKeyboardForList";

// expand info panel
const infoBtn = document.getElementById("info-btn") as HTMLButtonElement;
const shareYours = document.getElementById("share-yours") as HTMLButtonElement;
const infoPanel = document.getElementById("info-panel") as HTMLDivElement;
const navBtn = document.getElementById("nav-btn") as HTMLButtonElement;
const navPanel = document.getElementById("nav-panel") as HTMLDivElement;
const backdrop = document.getElementById("backdrop") as HTMLDivElement;
const mainTag = document.querySelector("main") as HTMLDivElement;
const codeContainer = document.getElementById("codeContainer");

const closeAllPanels = () => {
  infoPanel.classList.add("hidden");
  infoPanel.classList.remove("grid");
  navPanel.classList.add("hidden");
  navPanel.classList.remove("grid");
  infoBtn.setAttribute("aria-expanded", "false");
  navBtn.setAttribute("aria-pressed", "false");
  backdrop.classList.add("hidden");
  mainTag.removeAttribute("inert");
  codeContainer?.classList.remove("animate-pulse");
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
shareYours?.addEventListener("click", () => {
  expandPanel({ panelToExpand: infoPanel, btnToExpand: infoBtn });
  const codeContainer = document.getElementById("codeContainer");
  codeContainer?.classList.add("animate-pulse");
});
navBtn.addEventListener("click", () =>
  togglePanel({ panelToExpand: navPanel, btnToExpand: navBtn })
);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (
      infoPanel.classList.contains("grid") ||
      navPanel.classList.contains("grid")
    ) {
      const btnToFocus = infoPanel.classList.contains("grid")
        ? infoBtn
        : navBtn;
      closeAllPanels();
      btnToFocus.focus();
    }
  }
});

initRowEventListeners([
  ...document.querySelectorAll("[data-navlink]"),
] as HTMLAnchorElement[]);
