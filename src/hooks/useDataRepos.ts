import { ProjectProps } from '../types';
import { useEffect, useState } from 'react';

export function useDataRepos(userID: string | undefined) {
  const [repos, setRepos] = useState<ProjectProps[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userID}/repos`)
      .then(response => response.json())
      .then(data => projectsOrder(data));
    // eslint-disable-next-line
  }, [userID]);

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
    setRepos(projectsOrder);

    return projectsOrder;
  }

  return { repos };
}
