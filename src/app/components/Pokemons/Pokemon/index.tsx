import Card from '@/app/UI/Card';
import Image from '@/app/UI/Image';
import { Pokemon } from '@/app/interfaces';
import { POKEMON_IMAGE_URL } from '@/app/constants';

interface PokemonProps {
  pokemon: Pokemon;
}

export default function Pokemon({ pokemon }: PokemonProps) {
  const id = pokemon.url.split('/')[6];
  const imageUrl = `${POKEMON_IMAGE_URL}/${id}.png`;

  return (
    <Card>
      <Image src={imageUrl} alt={pokemon.name} width={130} height={130} />
      <p>{pokemon.name}</p>
    </Card>
  );
}
