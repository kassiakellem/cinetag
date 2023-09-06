import React from "react";
import styles from "./Rodape.module.css";
import { Link } from "react-router-dom";

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <h2>Desenvolvido por Alura.</h2>
    </footer>
  );
}
export default Rodape;
