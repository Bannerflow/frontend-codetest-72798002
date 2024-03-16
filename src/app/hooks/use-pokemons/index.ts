import useSWR from "swr";
import { useSetRecoilState } from "recoil";

import { POKEMON_LIMIT } from "@/app/constants";
import { Pokemons } from "@/app/interfaces";
import { pokemonListState } from "@/app/state/atoms";

export default function usePokemons(currentPage: number) {
  const setPokemons = useSetRecoilState(pokemonListState)
  const offset = (currentPage - 1) * POKEMON_LIMIT;
  const { error, isLoading } = useSWR(`/api/pokemon?limit=${POKEMON_LIMIT}&offset=${offset}`, getPokemons, {
    onSuccess: (data) => setPokemons(data)
  });

  return {
    error,
    isLoading
  }
}

async function getPokemons(url: string) {
  const response = await fetch(url);
  const pokemons: Pokemons = await response.json();

  return pokemons;
}
