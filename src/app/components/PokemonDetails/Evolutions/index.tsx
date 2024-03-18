import { useRecoilValue } from 'recoil';

import Pokemon from '@/app/components/Pokemons/Pokemon';
import { POKEMON_BASE_URL } from '@/app/constants';
import { getEvolutions } from '@/app/helpers/pokemons';
import { Pokemon as IPokemon } from '@/app/interfaces';
import { pokemonEvolutionsState, pokemonDetailsState } from '@/app/state/atoms';

export default function PokemonEvolutions() {
  const pokemonEvolutions = useRecoilValue(pokemonEvolutionsState);
  const pokemonDetails = useRecoilValue(pokemonDetailsState);

  const evolutions = getEvolutions(
    pokemonEvolutions.chain.evolves_to,
    pokemonDetails.name,
    []
  );

  const pokemons: IPokemon[] = evolutions.map((evolution) => {
    return {
      name: evolution.name,
      url: `${POKEMON_BASE_URL}/pokemon/${evolution.id}`,
    };
  });

  const pokemonCards = pokemons.map((pokemon) => {
    return (
      <Pokemon
        key={pokemon.name}
        pokemon={pokemon}
        className='w-[10rem]'
        w={50}
        h={50}
      />
    );
  });

  return pokemonCards.length > 0 ? (
    <div className='flex justify-center items-center gap-8'>
      <span className='text-2xl font-medium'>Evolutions: </span>
      {pokemonCards}
    </div>
  ) : null;
}
