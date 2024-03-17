import { Metadata } from 'next';

import Pokemons from '@/app/components/Pokemons';

export const metadata: Metadata = {
  title: 'Pokemons',
  description: 'Pokemons page - Bannerflow challenge',
};

export default function PokemonsPage() {
  return (
    <div className='container mx-auto p-5'>
      <Pokemons />
    </div>
  );
}
