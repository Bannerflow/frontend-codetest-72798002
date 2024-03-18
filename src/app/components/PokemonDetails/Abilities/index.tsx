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

  const classes = abilitiesUI.length === 1 ? 'flex' : 'flex flex-col gap-4';

  return (
    <div className='w-full'>
      <div className={classes}>{abilitiesUI}</div>
    </div>
  );
}
