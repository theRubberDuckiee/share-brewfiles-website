import Check from "@/icons/Check";
import { useState } from "react";

type Props = {
  isToggledFeatured: boolean;
  setIsToggledFeatured: React.Dispatch<React.SetStateAction<boolean>>;
};

const FeaturedBrewfileToggle = ({
  isToggledFeatured,
  setIsToggledFeatured,
}: Props) => {
  const handleCheckboxChange = () => {
    const newIsToggleFeatured = !isToggledFeatured;
    setIsToggledFeatured(newIsToggleFeatured);
    const url = new URL(location.href);
    newIsToggleFeatured
      ? url.searchParams.set("isFeaturedToggled", "true")
      : url.searchParams.delete("isFeaturedToggled");
    history.replaceState({}, "", url.toString());
  };
  return (
    <label className="flex items-center space-x-2 relative">
      <input
        type="checkbox"
        checked={isToggledFeatured}
        onChange={handleCheckboxChange}
        className="form-checkbox absolute inset-0 opacity-0 peer cursor-pointer"
      />
      <div className="h-6 w-6 grid place-items-center text-bkg peer-checked:bg-accent-bluemedium border-white/60 peer-checked:border-accent-bluemedium rounded peer-hover:border-accent-bluemedium ring-accent-bluemedium ring-offset-2 ring-offset-bkg border-2 peer-focus-visible:ring-4 transition-all">
        <Check />
      </div>
      <span className="text-white">Featured Brewfiles</span>
    </label>
  );
};
export default FeaturedBrewfileToggle;
