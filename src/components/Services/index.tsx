import { FiCode, FiFigma, FiSmartphone } from "react-icons/fi";
import { Service } from "./Service";
import { BoxServices, Container } from "./styles";

export function Services(){
  return(
    <Container id='services'>
      <h2>Serviços</h2>

      <BoxServices>
        <Service icon={<FiCode />} title={'Criação de sites'}/>
        <Service icon={<FiFigma />} title={'UI Designer'}/>
        <Service icon={<FiSmartphone />} title={'Sites responsivos'}/>
      </BoxServices>

    </Container>
  )
}