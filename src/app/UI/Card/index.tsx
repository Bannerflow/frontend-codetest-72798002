import { ReactNode, ComponentProps } from 'react';

interface CardProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export default function Card({ children, ...rest }: CardProps) {
  return (
    <div
      className='flex flex-col items-center gap-2 p-4 radius-3xl border-2 border-solid border-gray-50 shadow-3xl '
      {...rest}
    >
      {children}
    </div>
  );
}
