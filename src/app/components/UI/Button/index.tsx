import { ComponentProps, ReactNode } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}

export default function Button({ children, disabled, ...rest }: ButtonProps) {
  let classes = 'bg-[#0058ff] rounded-2xl w-[100px] p-2 text-white';

  if (disabled) {
    classes = classes + ' opacity-50 cursor-not-allowed';
  }

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
