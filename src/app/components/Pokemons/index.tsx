'use client';

import { useRecoilValue } from 'recoil';

import usePokemons from '@/app/hooks/use-pokemons';
import Loading from '@/app/UI/Loading';
import { paginationState } from '@/app/state/atoms';

export default function Pokemons() {
  const page = useRecoilValue(paginationState);
  const { data, error, isLoading } = usePokemons(page);

  console.log(data);

  return (
    <div>
      {isLoading && !data && <Loading />}
      {!isLoading &&
        data &&
        data.results.map((pokemon) => {
          return <p key={pokemon.url}>{pokemon.name}</p>;
        })}
    </div>
  );
}
