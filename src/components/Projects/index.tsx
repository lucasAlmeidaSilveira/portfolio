import { Project } from "./Project";
import { BoxProjects, Container } from "./style";

export function Projects(){
  return(
    <Container>
      <h2>Projetos</h2>

      <BoxProjects>
        <Project img={'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'} title={'Título do projeto'} description={'Tecnologias: HTML, CSS e JS.'} />
        <Project img={'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'} title={'Título do projeto'} description={'Tecnologias: HTML, CSS e JS.'} />
        <Project img={'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'} title={'Título do projeto'} description={'Tecnologias: HTML, CSS e JS.'} />
        <Project img={'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'} title={'Título do projeto'} description={'Tecnologias: HTML, CSS e JS.'} />
        <Project img={'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'} title={'Título do projeto'} description={'Tecnologias: HTML, CSS e JS.'} />
        <Project img={'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'} title={'Título do projeto'} description={'Tecnologias: HTML, CSS e JS.'} />
      </BoxProjects>
    </Container>
  )
}