import Titulo from "../../Components/Titulo";
import Banner from "../../Components/Banner";
import styles from "./Favoritar.module.css";
import Card from "../../Components/Card";
import { useState } from "react";
import CardsLista from "../../Components/CardsLista";
import { useFavoritoContext } from "../../Components/Contexto/Favoritos";


function Favoritar() {
  const { favorito } = useFavoritoContext();

  return (
    <>
      <Banner imagem="Favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritar;
