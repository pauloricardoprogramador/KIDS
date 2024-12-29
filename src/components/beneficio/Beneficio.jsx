import PropTypes from "prop-types";
import styles from "./Beneficio.module.css";

function Beneficio({ icon: Icon, titulo, subtitulo, strokeWidth, size }) {
  return (
    <div className={styles.container}>
      <div className={styles.icone}>
        {Icon && <Icon strokeWidth={strokeWidth} size={size} />}
      </div>
      <div className={styles.textos}>
        <p className={styles.titulo}>{titulo}</p>
        <p className={styles.subtitulo}>{subtitulo}</p>
      </div>
    </div>
  );
}

Beneficio.propTypes = {
  icon: PropTypes.func.isRequired,
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default Beneficio;