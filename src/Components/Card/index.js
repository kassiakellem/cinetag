import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./dasfavoritar.png";
import { createContext } from "react";
import { useFavoritoContext } from "../Contexto/Favoritos";
function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = ehFavorito ? iconeFavoritar : iconeDesfavoritar;
  return (
    <div
      className={styles.container}
      onClick={() => {
        adicionarFavorito({ id, titulo, capa });
      }}
    >
      <img src={capa} alt={titulo} />
      <h2>{titulo}</h2>
      <img src={icone} alt="Favoritar filmes" className={styles.favoritar} />
    </div>
  );
}
export default Card;
