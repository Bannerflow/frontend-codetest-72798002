import { POKEMON_BASE_URL } from "@/app/constants";

import { PokemonDetails } from "@/app/interfaces";

interface PokemonDetailsParams {
  params: { id: string }
}

export async function GET(_: Request, { params }: PokemonDetailsParams) {
  const { id } = params;

  try {
    const fetchedPokemonDetails = await fetch(`${POKEMON_BASE_URL}/pokemon/${id}`);

    if (!fetchedPokemonDetails.ok) {
      throw new Error();
    }

    const pokemon: PokemonDetails = await fetchedPokemonDetails.json();

    return Response.json({ ...pokemon });
  } catch (error) {
    return new Response('', { status: 500 });
  }
}