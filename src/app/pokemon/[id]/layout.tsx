import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Pokemon',
  description: 'Pokemon detail pages - Bannerflow challenge',
};

interface PokemonDetailsLayoutProps {
  children: ReactNode;
}

export default function PokemonDetailsLayout({
  children,
}: PokemonDetailsLayoutProps) {
  return children;
}
