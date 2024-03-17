interface ErrorProps {
  text: string;
}

export default function Error({ text }: ErrorProps) {
  return (
    <div className='w-[75%] text-rose-500 p-4 rounded-2xl bg-[#FFE6E6] text-center my-0 mx-auto'>
      <p>{text}</p>
    </div>
  );
}
