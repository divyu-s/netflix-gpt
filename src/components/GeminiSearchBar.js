import { useSelector } from "react-redux";
import lang from "../utils/languageContants";
import { useRef } from "react";

const GeminiSearchBar = () => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const handleGeminiSearchClick = () => {};

  return (
    <div className="w-1/2 absolute top-[20vh] left-0 right-0 mx-auto">
      <form className=" bg-black grid grid-cols-12">
        <input
          ref={searchText}
          className="m-4 p-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          type="button"
          className="text-white col-span-3 m-4 py-2 px-4 bg-red-700 rounded-lg"
          onClick={handleGeminiSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchBar;
