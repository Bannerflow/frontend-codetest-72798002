import { atom } from 'recoil';

import { Pokemons, PokemonDetails } from '@/app/interfaces';

export const pokemonListState = atom<Pokemons>({
  key: 'pokemonListState',
  default: {
    count: 0,
    next: null,
    previous: null,
    results: []
  },
});

export const pokemonDetailsState = atom<PokemonDetails>({
  key: 'pokemonDetailsState',
  default: {
    id: 0,
    name: '',
    abilities: [],
    species: [],
  },
});

export const paginationState = atom({
  key: 'paginationState',
  default: 1,
});
