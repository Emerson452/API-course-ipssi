async function getPokemon() {
  const name = document.getElementById("pokemonName").value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("name").textContent = data.name;
    document.getElementById("types").textContent = data.types
      .map((type) => type.type.name)
      .join(", ");

    decodeURIComponent.getElementById("result").style.display = "block";
  } catch (error) {}
}

// async function handleSearch() {
//   const pokemonName = document.getElementById("pokemonName");
//   if (pokemonName) {
//     getPokemon(pokemonName);
//   } else {
//     alert("Veuillez entrer un nom de Pokémon");
//   }
// }
