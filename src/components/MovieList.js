import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) {
    return;
  }

  return (
    <div className="movie-list mx-6">
      <h1 className="text-lg my-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll hide-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
