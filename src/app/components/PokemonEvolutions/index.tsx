import { useRecoilValue } from 'recoil';

import usePokemonEvolutions from '@/app/hooks/use-pokemon-evolution';
import { pokemonEvolutionsState, pokemonDetailsState } from '@/app/state/atoms';
import { getEvolutions } from '@/app/utils';

interface PokemonEvolutionsProps {
  id: string;
}

export default function PokemonEvolutions({ id }: PokemonEvolutionsProps) {
  const pokemonEvolutions = useRecoilValue(pokemonEvolutionsState);
  const pokemonDetails = useRecoilValue(pokemonDetailsState);
  const { error, isLoading } = usePokemonEvolutions(id);

  const evolutions = getEvolutions(
    pokemonEvolutions.chain.evolves_to,
    pokemonDetails.name,
    []
  );

  console.log(evolutions);

  return <div className='flex justify-center'>Hello World</div>;
}
