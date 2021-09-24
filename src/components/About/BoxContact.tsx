import { ReactElement } from 'react';
import { ContactBox } from './style';

type BoxContactProps = {
  icon: ReactElement;
  title: string;
  description: string;
};

export function BoxContact({ icon, title, description }: BoxContactProps) {
  return (
    <ContactBox>
      {icon}
      <h4>{title}</h4>
      <p>{description}</p>
    </ContactBox>
  );
}
