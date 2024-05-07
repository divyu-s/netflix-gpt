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
    <div className="relative">
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
