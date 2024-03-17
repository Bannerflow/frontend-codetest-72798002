'use client';

import { useRecoilValue } from 'recoil';

import Pagination from '@/app/components/Pokemons/Pagination';
import Pokemon from '@/app/components/Pokemons/Pokemon';
import Error from '@/app/components/UI/Error';
import Loading from '@/app/components/UI/Loading';
import usePokemons from '@/app/hooks/use-pokemons';
import { paginationState, pokemonListState } from '@/app/state/atoms';

export default function Pokemons() {
  const page = useRecoilValue(paginationState);
  const pokemons = useRecoilValue(pokemonListState);
  const { error, isLoading } = usePokemons(page);

  const pokemonList = pokemons.results.map((pokemon) => {
    return <Pokemon key={pokemon.name} pokemon={pokemon} />;
  });

  if (error) {
    return (
      <Error text='Something went wrong while fetching your pokemons. Please try again later.' />
    );
  }

  return isLoading ? (
    <div className='flex justify-center'>
      <Loading />
    </div>
  ) : (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-4 p-4'>
        {pokemonList}
      </div>
      <Pagination />
    </>
  );
}
