const axios = require("axios");

const main = async () => {
  let results = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");
  let {
    data: { moves },
  } = results;

  console.log(results);
};
main();
