import PropTypes from "prop-types";
import styles from "./styles.module.css";
function Icones({ icon: Icon, titulo, subtitulo }) {
  return (
    <div className={styles.container}>
      <div className={styles.icone}>{Icon && <Icon />}</div>
      <div className={styles.textos}>
        <p>{titulo}</p>
        <p>{subtitulo}</p>
      </div>
    </div>
  );
}

Icones.propTypes = {
  icon: PropTypes.func.isRequired,
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
};

export default Icones;
