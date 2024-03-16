import { useRouter } from 'next/navigation';

import Card from '@/app/components/UI/Card';
import Image from '@/app/components/UI/Image';
import { Pokemon } from '@/app/interfaces';
import { POKEMON_IMAGE_URL } from '@/app/constants';

interface PokemonProps {
  pokemon: Pokemon;
}

export default function Pokemon({ pokemon }: PokemonProps) {
  const router = useRouter();

  const id = pokemon.url.split('/')[6];
  const imageSrc = `${POKEMON_IMAGE_URL}/${id}.png`;

  function goToPokemonDetailsPage() {
    router.push(`/pokemon/${id}`);
  }

  return (
    <Card onClick={goToPokemonDetailsPage}>
      <Image src={imageSrc} alt={pokemon.name} width={100} height={100} />
      <p>{pokemon.name}</p>
    </Card>
  );
}
