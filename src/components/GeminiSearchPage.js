import { Image_URLs } from "../utils/constant";
import GeminiMovieSuggestions from "./GeminiMovieSuggestions";
import GeminiSearchBar from "./GeminiSearchBar";

const GeminiSearchPage = () => {
  return (
    <>
      <div className="hidden sm:block sm:fixed">
        <img
          className="w-[100vw] h-[100vh]"
          src={Image_URLs.BG_URL}
          alt="Background"
        />
      </div>
      <GeminiSearchBar />
      <GeminiMovieSuggestions />
    </>
  );
};

export default GeminiSearchPage;
