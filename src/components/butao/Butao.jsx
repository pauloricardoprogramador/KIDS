import PropTypes from "prop-types";
import styles from "./Butao.module.css";

function Butao({ titulo }) {
  return (
    <div className={styles.container}>
      <button className={styles.butao}>{titulo}</button>
    </div>
  );
}

Butao.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Butao;
