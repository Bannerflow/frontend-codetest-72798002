'use client';

import { useRecoilValue } from 'recoil';

import Actions from '@/app/components/Actions';
import Pokemon from '@/app/components/Pokemons/Pokemon';
import usePokemons from '@/app/hooks/use-pokemons';
import Loading from '@/app/UI/Loading';
import { paginationState } from '@/app/state/atoms';

export default function Pokemons() {
  const page = useRecoilValue(paginationState);
  const { data, error, isLoading } = usePokemons(page);

  let pokemonListUI = null;

  if (isLoading && !data) {
    pokemonListUI = (
      <div className='flex justify-center mb-4'>
        <Loading />
      </div>
    );
  } else if (!isLoading && data) {
    const pokemonList = data.results.map((pokemon) => {
      return <Pokemon key={pokemon.name} pokemon={pokemon} />;
    });

    pokemonListUI = (
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-4 p-4'>
          {pokemonList}
        </div>
        <Actions />
      </div>
    );
  }

  return pokemonListUI;
}
