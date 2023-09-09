import Inicio from "./pages/Inicio";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./Components/Cabecalho";
import Rodape from "./Components/Rodape";
import Favoritar from "./pages/Favoritar";
import Container from "./Components/Container";
import FavoritosProvider from "./Components/Contexto/Favoritos";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Cabecalho/>
    <Container>
      <FavoritosProvider>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/favoritos" element={<Favoritar/>}/>
      </Routes>
      </FavoritosProvider>
    </Container>
      <Rodape/>
    </BrowserRouter>
  );
}
export default AppRoutes;
