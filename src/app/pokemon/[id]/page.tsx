'use client';

import { useParams } from 'next/navigation';
import { useRecoilValue } from 'recoil';

import Abilities from '@/app/components/Pokemons/Pokemon/Abilities';
import Actions from '@/app/components/Pokemons/Pokemon/Actions';
import usePokemon from '@/app/hooks/use-pokemon';
import Card from '@/app/components/UI/Card';
import Image from '@/app/components/UI/Image';
import Loading from '@/app/components/UI/Loading';
import { POKEMON_IMAGE_URL } from '@/app/constants';
import { pokemonDetailsState } from '@/app/state/atoms';

export default function PokemonPage() {
  const { id } = useParams<{ id: string }>();
  const pokemon = useRecoilValue(pokemonDetailsState);
  const { isLoading, error } = usePokemon(id);

  const imageSrc = `${POKEMON_IMAGE_URL}/${id}.png`;

  return isLoading ? (
    <div className='flex justify-center'>
      <Loading />
    </div>
  ) : (
    <div className='flex justify-center'>
      <Card className='xs:w-[22rem] w-[32rem]'>
        <div className='w-full flex justify-between items-center'>
          <span className='text-2xl font-medium capitalize'>
            {pokemon.name}
          </span>
          <span className='text-2xl text-gray-400'>#{id}</span>
        </div>
        <Image src={imageSrc} alt={pokemon.name} width={200} height={200} />
        <hr className='w-full border-2 border-gray-200 mb-4 mt-4' />
        <Abilities abilities={pokemon.abilities} />
        <hr className='w-full border-2 border-gray-200 mb-4 mt-4' />
        <Actions />
      </Card>
    </div>
  );
}
