const API_KEY = "ba22f4a61530ad9b9b92d5ba79caa66f";
const BASE_URL = "https://api.themoviedb.org/3/";

const url = `${BASE_URL}genre/movie/list?api_key=${API_KEY}`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erreur de la requête");
    }
    return response.json();
  })
  .then((data) => {
    data.genres.forEach((genre) => {
      console.log(`Genre ID: ${genre.id}, Genre Name: ${genre.name}`);
    });
  })
  .catch((error) => {
    console.error("Erreur:", error);
  });
