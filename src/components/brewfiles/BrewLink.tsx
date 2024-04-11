const BrewLink = ({ id }: { id?: string }) => {
  return (
    <a
      aria-label="See full brewfile"
      href={id ? `/brew/${id}` : "#"}
      className="shrink-0 flex items-center gap-2 max-w-fit focus:outline-none transition-all focus-visible:ring-4 ring-offset-4 leading-tight ring-offset-bkg bg-accent-bluedark rounded-full hover:bg-accent-bluemedium ring-accent-bluemedium"
    >
      <div className="bg-white/7 size-9 grid place-items-center rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          className="pointer-events-none"
          aria-hidden="true"
        >
          <path
            fill="#fff"
            d="M18 1v13a1 1 0 0 1-2 0V3.414L1.708 17.707a1 1 0 0 1-1.415-1.415L14.586 2H4a1 1 0 0 1 0-2h13a1 1 0 0 1 1 1Z"
          ></path>
        </svg>
      </div>
    </a>
  );
};
export default BrewLink;
