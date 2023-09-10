import Inicio from "./pages/Inicio";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritar from "./pages/Favoritar";
import Player from "./pages/Player";
import NaoEncontrada from "./pages/NaoEncontrada";
import PaginaBase from "./pages/PaginaBase";
function AppRoutes() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<PaginaBase/>}>
        <Route index element={<Inicio />} />
        <Route path="favoritos" element={<Favoritar/>}/>
        <Route path=":id" element={<Player/>}></Route>
        <Route path="*" element={<NaoEncontrada/>}/>
        </Route>
      </Routes>
      
     
    </BrowserRouter>
  );
}
export default AppRoutes;
