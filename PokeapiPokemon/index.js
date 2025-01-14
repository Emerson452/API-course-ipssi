const url = "https://pokeapi.co/api/v2/pokemon/charizard";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log("Détails de Charizard :");
    console.log("Nom :", data.name);
    console.log("Id :", data.id);
    console.log("Types :", data.types.map((type) => type.type.name).join(", "));
  })
  .catch((error) => console.error("Erreur :", error));
