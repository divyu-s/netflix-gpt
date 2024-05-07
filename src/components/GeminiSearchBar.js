import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageContants";
import { useRef } from "react";
import geminiModel from "../gemini/gemini-config";
import { API_OPTIONS } from "../utils/constant";
import { addGeminiMovieResult } from "../store/geminiSlice";

const GeminiSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGeminiSearchClick = async () => {
    if (searchText.current.value) {
      const prompt =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const result = await geminiModel.generateContent(prompt);
      const response = await result.response;

      const geminiMovies = response.text()?.split(",");

      // For each movie I will search TMDB API
      // [Promise, Promise, Promise, Promise, Promise]
      const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGeminiMovieResult({
          movieNames: geminiMovies,
          movieResults: tmdbResults,
        })
      );
    }
  };

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
