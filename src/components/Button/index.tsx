import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonStyle } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <ButtonStyle type='button' {...rest}>
      {children}
    </ButtonStyle>
  );
}
