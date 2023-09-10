import styles from "./Inicio.module.css";
import React, { Fragment, useEffect, useState } from "react";
import Banner from "../../Components/Banner";
import Titulo from "../../Components/Titulo";
import CardsLista from "../../Components/CardsLista";

function Inicio() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/kassiakellem/cinetag-api/videos")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);
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
