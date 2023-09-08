import Titulo from "../../Components/Titulo";
import Banner from "../../Components/Banner";
import styles from "./Favoritar.module.css";
import Card from "../../Components/Card";
import { useState } from "react";
import CardsLista from "../../Components/CardsLista";

function Favoritar() {
  const [favoritos, setFavoritos] = useState([
    {
      id: 1,
      titulo: "O labirinto do Logcat",
      capa: "https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img2.png",
      link: "https://www.youtube.com/embed/ypvGqZGJBls",
    },
  ]);

  return (
    <>
      <Banner imagem="Favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <CardsLista videos={favoritos} />
    </>
  );
}

export default Favoritar;
