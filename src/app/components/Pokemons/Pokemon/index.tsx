import { useRouter } from 'next/navigation';

import Card from '@/app/components/UI/Card';
import Image from '@/app/components/UI/Image';
import { Pokemon } from '@/app/interfaces';
import { POKEMON_IMAGE_URL } from '@/app/constants';

interface PokemonProps {
  pokemon: Pokemon;
  w: number;
  h: number;
  className?: string;
}

export default function Pokemon({ pokemon, w, h, className }: PokemonProps) {
  const router = useRouter();

  const id = pokemon.url.split('/')[6];
  const imageSrc = `${POKEMON_IMAGE_URL}/${id}.png`;

  function goToPokemonDetailsPage() {
    router.push(`/pokemon/${id}`);
  }

  return (
    <Card className={className} onClick={goToPokemonDetailsPage}>
      <Image src={imageSrc} alt={pokemon.name} width={w} height={h} />
      <p>{pokemon.name}</p>
    </Card>
  );
}
