import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.length === 0 ? (
        <h2>No Movies Found</h2>
      ) : (
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      )}
    </div>
  );
};

export default MovieGrid;