export default function initRowEventListeners() {
  const rows = [
    ...document.querySelectorAll("[data-row]"),
  ] as HTMLAnchorElement[];

  rows.forEach((row, idx) => {
    row.addEventListener("keydown", (e) => {
      console.log("here");
      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "Home" ||
        e.key === "End"
      ) {
        e.preventDefault();
      }
      switch (e.key) {
        case "ArrowUp":
          idx > 0 ? rows[idx - 1].focus() : rows[rows.length - 1].focus();
          console.log(rows[rows.length - 1]);
          break;
        case "ArrowDown":
          idx < rows.length - 1 ? rows[idx + 1].focus() : rows[0].focus();
          break;
        case "Home":
          rows[0].focus();
          break;
        case "End":
          rows[rows.length - 1].focus();
          break;
        default:
          break;
      }
    });
  });
}
