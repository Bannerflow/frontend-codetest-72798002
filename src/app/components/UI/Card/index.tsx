import { ReactNode, ComponentProps } from 'react';

interface CardProps extends ComponentProps<'div'> {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className, ...rest }: CardProps) {
  let classes = [
    'flex flex-col items-center gap-2 p-4 rounded-2xl border-2 border-solid border-gray-50 shadow-3xl',
  ];

  if (className) {
    classes.push(className);
  }
  return (
    <div className={classes.join(' ')} {...rest}>
      {children}
    </div>
  );
}
