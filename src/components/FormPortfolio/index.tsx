import { Link } from "react-router-dom";
import { Container } from "./style";

export function FormPortfolio() {
  return (
    <Container>
      <h1>
        login<span>Portfólio</span>
      </h1>
      <button>
        <Link to='/portfolio'>Gerar portfolio</Link>
      </button>
    </Container>
  );
}
