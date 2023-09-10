import Banner from "../../Components/Banner";
import styles from "./Player.module.css";
import Titulo from "../../Components/Titulo";
import { useParams } from "react-router-dom";
import videos from "../../Json/db.json"
import NaoEncontrada from "../NaoEncontrada/index";

function Player() {
    const parametros = useParams();
    const video = videos.find((video)=> {
        return video.id === Number(parametros.id);
    })
    if (!video){
    return <NaoEncontrada/>
    }
  return (
    <>
      <Banner imagem="player"/>
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
      <iframe
        width="100%"
        height="100%"
        src={video.link}
        title={video.titulo}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
    </>
  );
}
export default Player;
