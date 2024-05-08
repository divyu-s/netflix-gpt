import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";
import { useSelector } from "react-redux";
import GeminiSearchPage from "./GeminiSearchPage";

const Browse = () => {
  const showGeminiSearch = useSelector(
    (store) => store.gemini.showGeminiSearch
  );

  useNowPlayingMovies();
  useTrendingMovies();

  return (
    <div className="bg-black sm:relative sm:bg-none">
      {showGeminiSearch ? (
        <>
          <Header />
          <GeminiSearchPage />
        </>
      ) : (
        <>
          <Header />
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
