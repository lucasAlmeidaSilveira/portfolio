import { ProjectBox } from './style';

type ProjectProps = {
  img: string;
  title: string;
  description: string;
};

export function Project({ img, title, description }: ProjectProps) {
  return (
    <ProjectBox>
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </ProjectBox>
  );
}
