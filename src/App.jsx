import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "./services/api";
import MovieGrid from "./component/MovieGrid";
import SearchBar from "./component/SearchBar";


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const popular = await getPopularMovies();
    setMovies(popular);
  };

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div className="app">
      <h1>Movie Search App</h1>

      <SearchBar onSearch={handleSearch} />

      <MovieGrid movies={movies} />
    </div>
  );
}

export default App;