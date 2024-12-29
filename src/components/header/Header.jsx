import { Shell } from "lucide-react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

function Header({ titulo, subtitulo }) {
  return (
    <div className={styles.container}>
      <div className={styles.logotipo}>
        <Shell strokeWidth={0.5} size={40} />
      </div>
      <div className={styles.header}>
        <h1 className={styles.titulo}>{titulo}</h1>
        <p className={styles.subtitulo}>{subtitulo}</p>
      </div>
    </div>
  );
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
};

export default Header;
