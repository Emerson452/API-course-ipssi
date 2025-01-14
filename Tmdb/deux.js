const API_KEY = "ba22f4a61530ad9b9b92d5ba79caa66f";
const BASE_URL = "https://api.themoviedb.org/3/";

const url = `${BASE_URL}movie/top_rated?api_key=${API_KEY}`;

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
        `Title: ${movie.title}, Rating: ${movie.vote_average}, Release Date: ${movie.release_date}`
      );
    });
  })
  .catch((error) => {
    console.error("Erreur:", error);
  });
