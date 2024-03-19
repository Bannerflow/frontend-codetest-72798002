import { useRecoilValue } from 'recoil';

import Card from '@/app/atoms/card';
import Image from '@/app/atoms/image';
import Abilities from '@/app/components/pokemon-details/abilities';
import Actions from '@/app/components/pokemon-details/actions';
import Title from '@/app/components/pokemon-details/title';
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
