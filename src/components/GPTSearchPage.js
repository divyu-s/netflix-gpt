import { Image_URLs } from "../utils/constant";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearchPage = () => {
  return (
    <>
      <img
        className="w-[100vw] h-[100vh]"
        src={Image_URLs.BG_URL}
        alt="Background"
      />
      <GPTSearchBar />
    </>
  );
};

export default GPTSearchPage;
