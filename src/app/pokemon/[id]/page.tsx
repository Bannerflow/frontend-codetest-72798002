'use client';

import { useParams } from 'next/navigation';

import PokemonDetails from '@/app/components/pokemon-details';

export default function PokemonPage() {
  const { id } = useParams<{ id: string }>();

  return <PokemonDetails id={id} />;
}
