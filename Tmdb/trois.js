const API_KEY = "ba22f4a61530ad9b9b92d5ba79caa66f";
const BASE_URL = "https://api.themoviedb.org/3/";

const query = "star";
const url = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erreur de la requête");
    }
    return response.json();
  })
  .then((data) => {
    data.results.slice(0, 5).forEach((movie) => {
      console.log(
        `Title: ${movie.title}, Release Date: ${movie.release_date}, Overview: ${movie.overview}`
      );
    });
  })
  .catch((error) => {
    console.error("Erreur:", error);
  });
