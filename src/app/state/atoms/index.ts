import { atom } from 'recoil';

import { Pokemons } from '@/app/interfaces';

export const pokemonListState = atom<Pokemons>({
  key: 'pokemonListState',
  default: {
    count: 0,
    next: null,
    previous: null,
    results: []
  },
});

export const paginationState = atom({
  key: 'paginationState',
  default: 1,
});
