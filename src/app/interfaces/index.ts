export interface Pokemon {
  name: string;
  url: string;
}

export interface Pokemons {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface PokemonDetails {
  id: number;
  name: string;
  abilities: Abilities[];
  species: Species[];
}

export interface Abilities {
  ability: {
    name: string;
    url: string;
  }
  is_hidden: boolean;
  slot: number;
}

export interface PokemonSpecies {
  evolution_chain: {
    url: string;
  };
}

export interface PokemonEvolutions {
  chain: {
    evolves_to: Evolution[];
  }
}

export interface Evolution {
  species: {
    name: string;
    url: string;
  };
  is_baby: boolean;
  evolves_to: Evolution[] | [];
}

interface Species {
  name: string;
  url: string;
}

