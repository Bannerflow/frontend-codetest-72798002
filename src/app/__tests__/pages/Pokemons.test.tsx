import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';

import PokemonsPage from '@/app/page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/app/components/Pokemons', () => {
  const MockPokemons = () => (
    <div data-testid='pokemons-components'>Pokemons Component</div>
  );
  MockPokemons.displayName = 'MockPokemons';

  return MockPokemons;
});

describe('PokemonsPage', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      route: '/',
      pathname: '/',
      query: {},
      asPath: '',
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the page container', () => {
    const { container } = render(<PokemonsPage />);

    const wrapper = container.querySelector('.container.mx-auto.p-5');
    const pokemonsComponent = screen.getByTestId('pokemons-components');

    expect(wrapper).toBeInTheDocument();
    expect(pokemonsComponent).toBeInTheDocument();
  });
});
