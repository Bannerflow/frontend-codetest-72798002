interface TitleProps {
  id: string;
  name: string;
}

export default function Title({ id, name }: TitleProps) {
  return (
    <div className='w-full flex justify-between items-center'>
      <span className='text-2xl font-medium capitalize'>{name}</span>
      <span className='text-2xl text-gray-400'>#{id}</span>
    </div>
  );
}
