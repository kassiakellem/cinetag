import Card from "../../Components/Card";
import styles from "./CardLista.module.css";

export default function CardsLista({videos}) {
    return <section className={styles.container}>
        {videos.map((video) => {
            return <Card id={video.id} key={video.id} capa={video.capa} titulo={video.titulo}/>;
        })}
    </section>;
}