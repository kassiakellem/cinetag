import styles from "./Inicio.module.css";
import React, { Fragment } from "react";
import Banner from "../../Components/Banner";
import Titulo from "../../Components/Titulo";
import Card from "../../Components/Card";
import videos from "../../Json/db.json";
import Favoritar from "../../pages/Favoritar";
import CardsLista from "../../Components/CardsLista";

function Inicio() {
  return (
    <Fragment>
      <Banner imagem="Home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <CardsLista videos={videos} />

    </Fragment>
  );
}
export default Inicio;
