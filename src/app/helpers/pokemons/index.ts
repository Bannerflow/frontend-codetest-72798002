import { Evolution } from "@/app/interfaces";

interface EvolutionCardData {
  id: string;
  name: string;
}

export function getEvolutions(
  pokemonEvolutions: Evolution[],
  name: string,
  evolutions: EvolutionCardData[]
) {
  if (isFinalEvolution(pokemonEvolutions, name)) {
    return [];
  }
  if (pokemonEvolutions.length === 0) {
    return evolutions;
  }

  if (pokemonEvolutions[0].species.name !== name) {
    evolutions.push({
      name: pokemonEvolutions[0].species.name,
      id: pokemonEvolutions[0].species.url.split('/')[6],
    });
  }

  return getEvolutions(pokemonEvolutions[0].evolves_to, name, evolutions);
}

function isFinalEvolution(pokemonEvolutions: Evolution[], name: string) {
  if (pokemonEvolutions.length > 0 && pokemonEvolutions[0].evolves_to.length > 0) {
    return isFinalEvolution(pokemonEvolutions[0].evolves_to, name);
  }

  if (
    pokemonEvolutions.length > 0 && pokemonEvolutions[0].evolves_to.length === 0 &&
    pokemonEvolutions[0].species.name === name
  ) {
    return true;
  }

  return false;
}
