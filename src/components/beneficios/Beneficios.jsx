import {
  Lock,
  CircleCheck,
  BellRing,
  Clipboard,
  TrendingUp,
} from "lucide-react";

import Beneficio from "../beneficio/Beneficio";
import Butao from "../butao/Butao";
import Header from "../header/Header";
import Splash from "../../pages/splash/Splash";

import styles from "./Beneficios.module.css";
import { useEffect, useState } from "react";

function Beneficios() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      {showSplash && <Splash />}
      <Header
        titulo="Bem-vindo ao  Kids!"
        subtitulo="Acompanhe a presença de seus filhos e fique sempre informado sobre as atividades da igreja."
      />
      <p className={styles.kids}>Por que usar o Kids?</p>

      <div className={styles.beneficios}>
        <Beneficio
          icon={Lock}
          strokeWidth={2}
          size={20}
          titulo="Segurança"
          subtitulo="Apenas responsáveis autorizados retiram as crianças."
        />
        <Beneficio
          icon={CircleCheck}
          strokeWidth={2}
          size={20}
          titulo="Praticidade"
          subtitulo="Check-in e check-out rápidos e fáceis."
        />
        <Beneficio
          icon={BellRing}
          strokeWidth={2}
          size={20}
          titulo="Comunicação"
          subtitulo="Notificações sobre eventos e atividades."
        />
        <Beneficio
          icon={Clipboard}
          strokeWidth={2}
          size={20}
          titulo="Organização"
          subtitulo=" Acompanhamento da presença das crianças."
        />
        <Beneficio
          icon={TrendingUp}
          strokeWidth={2}
          size={20}
          titulo="Acesso Simples"
          subtitulo="Interface fácil de usar para todos."
        />
      </div>

      <div className={styles.footer}>
        <Butao titulo="Começar" />
      </div>
    </div>
  );
}

export default Beneficios;
