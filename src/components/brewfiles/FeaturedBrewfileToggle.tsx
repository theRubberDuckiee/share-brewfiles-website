import { useState } from "react";

type Props = {
    isToggledFeatured: boolean,
    setIsToggledFeatured: React.Dispatch<React.SetStateAction<boolean>>,
};

const FeaturedBrewfileToggle = ({isToggledFeatured, setIsToggledFeatured}: Props) => {
    const handleCheckboxChange = () => {
      const newIsToggleFeatured = !isToggledFeatured
        setIsToggledFeatured(newIsToggleFeatured);
        const url = new URL(location.href);
        newIsToggleFeatured 
          ? url.searchParams.set("isFeaturedToggled", 'true')
          : url.searchParams.delete("isFeaturedToggled")
        history.replaceState({}, "", url.toString());
    };
    return (
        <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          checked={isToggledFeatured}
          onChange={handleCheckboxChange}
          className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className="text-gray-700">Featured Brewfiles</span>
      </label>
    )
  }
export default FeaturedBrewfileToggle;
