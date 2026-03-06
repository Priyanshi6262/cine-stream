const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

// Get popular movies
export const getPopularMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

// Search movies
export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Search error:", error);
    return [];
  }
};