import useSWR from "swr";
import { useSetRecoilState } from "recoil";

import { PokemonDetails } from "@/app/interfaces";
import { pokemonDetailsState } from "@/app/state/atoms";

export default function usePokemon(id: string) {
  const setPokemonDetails = useSetRecoilState(pokemonDetailsState);
  const { error, isLoading } = useSWR([`/api/pokemon/${id}`, id], ([url, id]) => getPokemonDetails(url, id), {
    onSuccess: (data) => setPokemonDetails(data),
  });

  return {
    error,
    isLoading
  }
}

async function getPokemonDetails(url: string, id: string) {
  const response = await fetch(url);
  const pokemon: PokemonDetails = await response.json();

  return {
    id: Number(id),
    name: pokemon.name,
    abilities: pokemon.abilities,
    species: pokemon.species,
  };
}