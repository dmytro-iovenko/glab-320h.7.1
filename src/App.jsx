import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  // Constant with your API Key
  const apiKey = import.meta.env.VITE_OMBDAPI_KEY;

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async (searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setMovie(data);
  };

  // We pass the getMovie function as a prop called moviesearch
  return (
    <>
      <Form moviesearch={getMovie} />
      <MovieDisplay />
    </>
  );
}

export default App;
