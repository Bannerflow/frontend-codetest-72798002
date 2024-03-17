'use client';

import { useParams } from 'next/navigation';

import PokemonDetails from '@/app/components/PokemonDetails';
import PokemonEvolutions from '@/app/components/PokemonEvolutions';

export default function PokemonPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className='flex flex-col gap-4'>
      <PokemonDetails id={id} />
      <PokemonEvolutions id={id} />
    </div>
  );
}
