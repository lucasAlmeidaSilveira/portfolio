import { BoxContactProps } from '../../types';
import { ContactBox } from './style';

export function BoxContact({ icon, title, description, url }: BoxContactProps) {
  return (
    <ContactBox target='_blank' href={url}>
      {icon}
      <h4>{title}</h4>
      <p>{description}</p>
    </ContactBox>
  );
}
