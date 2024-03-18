import { useRecoilValue } from 'recoil';

import Abilities from '@/app/components/PokemonDetails/Abilities';
import Actions from '@/app/components/PokemonDetails/Actions';
import Title from '@/app/components/PokemonDetails/Title';
import Card from '@/app/components/UI/Card';
import Image from '@/app/components/UI/Image';
import { POKEMON_IMAGE_URL } from '@/app/constants';
import { pokemonDetailsState } from '@/app/state/atoms';

interface Details {
  id: string;
}

export default function Details({ id }: Details) {
  const pokemon = useRecoilValue(pokemonDetailsState);

  const imageSrc = `${POKEMON_IMAGE_URL}/${id}.png`;

  return (
    <div className='flex justify-center'>
      <Card className='xs:w-[22rem] w-[32rem]'>
        <Title id={id} name={pokemon.name} />
        <Image src={imageSrc} alt={pokemon.name} width={160} height={160} />
        <hr className='w-full border-2 border-gray-200 mb-4 mt-4' />
        <Abilities abilities={pokemon.abilities} />
        <hr className='w-full border-2 border-gray-200 mb-4 mt-4' />
        <Actions />
      </Card>
    </div>
  );
}
