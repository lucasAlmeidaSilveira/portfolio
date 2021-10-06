import { ReactElement } from 'react';
import { ContactBox } from './style';

type BoxContactProps = {
  icon: ReactElement;
  title: string;
  description: string;
  url?: string;
};

export function BoxContact({
  icon,
  title,
  description,
  url,
}: BoxContactProps) {
  return (
    <ContactBox target='_blank' href={url}>
      {icon}
      <h4>{title}</h4>
      <p>{description}</p>
    </ContactBox>
  );
}
