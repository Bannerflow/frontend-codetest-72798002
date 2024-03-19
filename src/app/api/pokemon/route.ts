import { POKEMON_BASE_URL } from '@/app/constants';
import { Pokemons } from '@/app/interfaces';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');
  const offset = searchParams.get('offset');

  try {
    const fetchedPokemons = await fetch(`${POKEMON_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);

    if (!fetchedPokemons.ok) {
      throw new Error();
    }

    const pokemons: Pokemons = await fetchedPokemons.json();

    return Response.json({ ...pokemons });
  } catch (error) {
    return new Response('', { status: 500 });
  }
}
