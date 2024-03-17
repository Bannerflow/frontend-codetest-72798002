import Card from '@/app/components/UI/Card';
import { Abilities } from '@/app/interfaces';

interface AbilitiesProps {
  abilities: Abilities[];
}

export default function Abilities({ abilities }: AbilitiesProps) {
  const abilitiesUI = abilities.map((ability, index) => {
    return (
      <Card className='capitalize' key={`${ability.ability.name}-${index}`}>
        {ability.ability.name}
      </Card>
    );
  });

  const classes =
    abilitiesUI.length === 1 ? 'flex' : 'flex gap-4 justify-center xs:flex-col';

  return (
    <div className='w-full'>
      <p className='text-2xl font-medium capitalize mb-4'>Abilities</p>
      <div className={classes}>{abilitiesUI}</div>
    </div>
  );
}
