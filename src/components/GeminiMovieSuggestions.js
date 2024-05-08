import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GeminiMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gemini);

  if (movieNames.length === 0) {
    return null;
  }

  return (
    <div className="p-4 bg-black text-white sm:bg-opacity-90 sm:w-8/12 sm:absolute sm:top-[40vh] sm:right-0 sm:left-0 sm:mx-auto">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GeminiMovieSuggestions;
