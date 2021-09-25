import { ReactElement } from "react"
import { ServiceBox } from "./styles"

type ServiceProps = {
  icon: ReactElement;
  title: string;
}

export function Service({icon, title}: ServiceProps){
  return(
    <ServiceBox>
      {icon}
      <h3>{title}</h3>
    </ServiceBox>
  )
}