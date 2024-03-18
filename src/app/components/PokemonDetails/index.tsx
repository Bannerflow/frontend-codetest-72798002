import Details from '@/app/components/PokemonDetails/Details';
import Evolutions from '@/app/components/PokemonDetails/Evolutions';
import Error from '@/app/components/UI/Error';
import Loading from '@/app/components/UI/Loading';
import usePokemon from '@/app/hooks/use-pokemon';
import usePokemonEvolutions from '@/app/hooks/use-pokemon-evolution';

interface PokemonDetailsProps {
  id: string;
}

export default function PokemonDetails({ id }: PokemonDetailsProps) {
  const { error: errorPokemon, isLoading: isLoadingPokemon } = usePokemon(id);
  const { error: errorEvolutions, isLoading: isLoadingEvolutions } =
    usePokemonEvolutions(id);

  if (errorPokemon || errorEvolutions) {
    return (
      <Error text='Something went wrong while loading your pokemon detailed information. Please, try again later' />
    );
  }

  return isLoadingPokemon || isLoadingEvolutions ? (
    <div className='flex justify-center'>
      <Loading />
    </div>
  ) : (
    <div className='flex flex-col gap-4'>
      <Details id={id} />
      <Evolutions />
    </div>
  );
}
