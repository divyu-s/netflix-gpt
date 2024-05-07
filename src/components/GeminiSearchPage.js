import { Image_URLs } from "../utils/constant";
import GeminiSearchBar from "./GeminiSearchBar";

const GeminiSearchPage = () => {
  return (
    <>
      <img
        className="w-[100vw] h-[100vh]"
        src={Image_URLs.BG_URL}
        alt="Background"
      />
      <GeminiSearchBar />
    </>
  );
};

export default GeminiSearchPage;
