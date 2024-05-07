import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GeminiMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gemini);

  if (movieNames.length === 0) {
    return null;
  }

  return (
    <div className="p-4 bg-black text-white bg-opacity-90 w-8/12 absolute top-[40vh] right-0 left-0 mx-auto">
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
