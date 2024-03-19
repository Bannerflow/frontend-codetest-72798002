import { POKEMON_BASE_URL } from '@/app/constants';

import { PokemonEvolutions, PokemonSpecies } from '@/app/interfaces';

interface PokemonEvolutionsParams {
  params: { id: string };
}

export async function GET(_: Request, { params }: PokemonEvolutionsParams) {
  const { id } = params;

  try {
    const fetchedPokemonSpecies = await getPokemonSpeciesById(id);

    if (fetchedPokemonSpecies instanceof Error) {
      throw new Error();
    }

    const fetchedPokemonEvolutions = await fetch(fetchedPokemonSpecies.evolution_chain.url);

    if (!fetchedPokemonEvolutions.ok) {
      throw new Error();
    }

    const pokemonEvolutions: PokemonEvolutions = await fetchedPokemonEvolutions.json();

    return Response.json({ ...pokemonEvolutions });
  } catch (error) {
    return new Response('', { status: 500 });
  }
}

async function getPokemonSpeciesById(id: string) {
  try {
    const fetchedPokemonSpecies = await fetch(
      `${POKEMON_BASE_URL}/pokemon-species/${id}`
    );

    if (!fetchedPokemonSpecies.ok) {
      throw new Error();
    }

    const pokemonSpecies: PokemonSpecies = await fetchedPokemonSpecies.json();

    return pokemonSpecies;
  } catch (error) {
    return new Error();
  }
}