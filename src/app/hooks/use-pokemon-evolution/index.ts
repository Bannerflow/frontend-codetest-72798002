import useSWR from 'swr';
import { useSetRecoilState } from 'recoil';

import { PokemonEvolutions } from '@/app/interfaces';
import { pokemonEvolutionsState } from '@/app/state/atoms';

export default function usePokemonEvolutions(id: string) {
  const setPokemonEvolutions = useSetRecoilState(pokemonEvolutionsState);
  const { error, isLoading } = useSWR(
    [`/api/pokemon-evolutions/${id}`, id],
    ([url, id]) => getPokemonDetails(url, id),
    {
      onSuccess: (data) => setPokemonEvolutions(data),
    }
  );

  return {
    error,
    isLoading,
  };
}

async function getPokemonDetails(url: string, id: string) {
  const response = await fetch(url);
  const pokemonEvolutions: PokemonEvolutions = await response.json();

  return pokemonEvolutions;
}