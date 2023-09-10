import { Outlet } from "react-router-dom";
import Cabecalho from "../../Components/Cabecalho";
import Container from "../../Components/Container";
import FavoritosProvider from "../../Components/Contexto/Favoritos";
import Rodape from "../../Components/Rodape";

function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
}

export default PaginaBase;
