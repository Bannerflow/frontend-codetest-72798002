import Pokemons from '@/app/components/Pokemons';
import Actions from '@/app/components/Actions';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <Pokemons />
      <Actions />
    </div>
  );
}
