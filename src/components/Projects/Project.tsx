import { ProjectBox } from './style';

type ProjectProps = {
  key: number;
  img: string;
  title: string;
  description: string;
  url: string;
};

export function Project({ key, img, title, description, url }: ProjectProps) {
  return (
    <ProjectBox target='_blank' href={url}>
      <h4>{title}</h4>
      <p>{description}</p>
    </ProjectBox>
  );
}
