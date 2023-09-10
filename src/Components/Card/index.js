import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./dasfavoritar.png";
import { createContext } from "react";
import { useFavoritoContext } from "../Contexto/Favoritos";
import { Link } from "react-router-dom";
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
      <Link className={styles.link} to={`/${id}`}>
      <img src={capa} alt={titulo} />
      <h2>{titulo}</h2>
      </Link>
      <img src={icone} alt="Favoritar filmes" className={styles.favoritar} />
    </div>
  );
}
export default Card;
