import { useEffect, useState } from 'react';
import { ProjectProps } from '../../types';
import { Project } from './Project';
import { BoxProjects, Container } from './style';

export function Projects() {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/lucasAlmeidaSilveira/repos')
      .then(response => response.json())
      .then(data => projectsOrder(data));
    // eslint-disable-next-line
  }, []);

  function projectsFormat(project: ProjectProps) {
    return {
      id: project.id,
      homepage: project.homepage,
      name: project.name.replace(/-/gi, ' ').toUpperCase(),
      private: project.private,
      description: project.description,
    };
  }

  function projectExists(project: ProjectProps) {
    if (
      project.homepage !== '' &&
      project.homepage !== null &&
      !project.private
    )
      return project;
  }

  function projectsOrder(projects: ProjectProps[]) {
    const projectsFormatted = projects.map(projectsFormat); // formatando
    const projectsOrder = projectsFormatted.filter(projectExists); // filtrando
    setProjects(projectsOrder);

    return projectsOrder;
  }

  return (
    <Container id='projects'>
      <h2>Projetos</h2>

      <BoxProjects>
        {projects.map(project => (
          <Project
            key={project.id}
            url={project.homepage}
            img={
              'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
            }
            title={project.name}
            description={project.description}
          />
        ))}
      </BoxProjects>
    </Container>
  );
}
