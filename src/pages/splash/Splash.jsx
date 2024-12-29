import { Shell } from "lucide-react";

import styles from "./Splash.module.css";

function Splash() {
  return (
    <div className={styles.container}>
      <Shell strokeWidth={0.5} size={90} className={styles.logotipo} />
    </div>
  );
}

export default Splash;
