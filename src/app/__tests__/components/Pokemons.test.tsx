import { useRecoilValue, RecoilRoot } from 'recoil';
import { useRouter } from 'next/navigation';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Pokemons from '@/app/components/pokemons';
import usePokemons from '@/app/hooks/use-pokemons';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('recoil', () => ({
  ...jest.requireActual('recoil'),
  useRecoilValue: jest.fn(),
  useSetRecoilState: jest.fn(),
}));

jest.mock('@/app/hooks/use-pokemons', () => jest.fn());

describe('Pokemons component', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      route: '/',
      pathname: '/',
      query: {},
      asPath: '',
    }));

    jest.clearAllMocks();
  });

  it('should display a list of 10 Pokemon', async () => {
    (useRecoilValue as jest.Mock).mockImplementation((atom) => {
      if (atom.key === 'paginationState') {
        return 1;
      }
      if (atom.key === 'pokemonListState') {
        return {
          count: 0,
          next: null,
          previous: null,
          results: Array.from({ length: 10 }, (_, index) => ({
            name: `pokemon-${index}`,
            url: `https://pokeapi.co/api/v2/pokemon/${index + 1}`,
          })),
        };
      }
    });

    (usePokemons as jest.Mock).mockReturnValue({
      error: null,
      isLoading: false,
    });

    render(
      <RecoilRoot>
        <Pokemons />
      </RecoilRoot>
    );

    const pokemonItems = await screen.findAllByText(/pokemon-/i);
    const images = screen.queryAllByRole('img');

    expect(pokemonItems).toHaveLength(10);
    expect(images).toHaveLength(10);
  });

  it('should display an error message when there is an error fetching pokemons', async () => {
    (useRecoilValue as jest.Mock).mockImplementation((atom) => {
      if (atom.key === 'paginationState') {
        return 1;
      }
      if (atom.key === 'pokemonListState') {
        return {
          count: 0,
          next: null,
          previous: null,
          results: Array.from({ length: 10 }, (_, index) => ({
            name: `pokemon-${index}`,
            url: `https://pokeapi.co/api/v2/pokemon/${index + 1}`,
          })),
        };
      }
    });
    (usePokemons as jest.Mock).mockReturnValue({
      error: true,
      isLoading: false,
    });

    render(
      <RecoilRoot>
        <Pokemons />
      </RecoilRoot>
    );

    const errorMessage = screen.getByText(/Something went wrong/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('should display a loading spinner while pokemons are being fetched', async () => {
    (useRecoilValue as jest.Mock).mockImplementation((atom) => {
      if (atom.key === 'paginationState') {
        return 1;
      }
      if (atom.key === 'pokemonListState') {
        return {
          count: 0,
          next: null,
          previous: null,
          results: Array.from({ length: 10 }, (_, index) => ({
            name: `pokemon-${index}`,
            url: `https://pokeapi.co/api/v2/pokemon/${index + 1}`,
          })),
        };
      }
    });
    (usePokemons as jest.Mock).mockReturnValue({
      error: false,
      isLoading: true,
    });

    const { container } = render(
      <RecoilRoot>
        <Pokemons />
      </RecoilRoot>
    );

    const loadingSpinner = container.querySelector('.animate-spin');
    expect(loadingSpinner).toBeInTheDocument();
  });
});
