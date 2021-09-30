import { ProjectBox } from './style';

type ProjectProps = {
  img: string;
  title: string;
  description: string;
  url: string;
};

export function Project({ img, title, description, url }: ProjectProps) {
  return (
    <ProjectBox target="_blank" href={url}>
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </ProjectBox>
  );
}