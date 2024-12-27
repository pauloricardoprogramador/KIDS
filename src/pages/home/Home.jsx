import {
  BellRing,
  CircleCheck,
  Lock,
  Shell,
  Clipboard,
  TrendingUp,
} from "lucide-react";

import styles from "./styles.module.css";
import Icones from "../../components/Icones";

function Home() {
  return (
    <div>
      <Shell />
      <div className={styles.header}>
        <h1>Bem-vindo ao Kids!</h1>
        <p>
          Acompanhe a presença de seus filhos e fique sempre informado sobre as
          atividades da igreja.
        </p>
      </div>
      <p>Por que usar o Kids?</p>

      <div className={styles.information}>
        <Icones
          icon={Lock}
          titulo="Segurança"
          subtitulo="Apenas responsáveis autorizados retiram as crianças."
        />
        <Icones
          icon={CircleCheck}
          titulo="Praticidade"
          subtitulo="Check-in e check-out rápidos e fáceis."
        />
        <Icones
          icon={BellRing}
          titulo="Comunicação"
          subtitulo="Notificações sobre eventos e atividades."
        />
        <Icones
          icon={Clipboard}
          titulo="Organização"
          subtitulo=" Acompanhamento da presença das crianças."
        />
        <Icones
          icon={TrendingUp}
          titulo="Acesso Simples"
          subtitulo="Interface fácil de usar para todos."
        />
      </div>

      <footer>
        <button>Começar</button>
      </footer>
    </div>
  );
}
export default Home;
