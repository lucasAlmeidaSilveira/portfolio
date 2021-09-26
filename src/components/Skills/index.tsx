import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiNextDotJs } from 'react-icons/si'
import { Skill } from "./Skill";
import { BoxSkills, Container } from "./style";

export function Skills(){
  return(
    <Container id='skills'>
      <h2>Minhas skills</h2>

      <BoxSkills>
        <Skill icon={<FaHtml5 />}/>
        <Skill icon={<FaCss3Alt />}/>
        <Skill icon={<FaJs />}/>
        <Skill icon={<FaReact />}/>
        <Skill icon={<SiNextDotJs />}/>
      </BoxSkills>

    </Container>
  )
}