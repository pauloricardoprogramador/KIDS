import Beneficio from "../beneficio/Beneficio";
import {
  Lock,
  CircleCheck,
  BellRing,
  Clipboard,
  TrendingUp,
} from "lucide-react";

function Beneficios() {
  return (
    <div>
      <Beneficio
        icon={Lock}
        titulo="Segurança"
        subtitulo="Apenas responsáveis autorizados retiram as crianças."
      />
      <Beneficio
        icon={CircleCheck}
        titulo="Praticidade"
        subtitulo="Check-in e check-out rápidos e fáceis."
      />
      <Beneficio
        icon={BellRing}
        titulo="Comunicação"
        subtitulo="Notificações sobre eventos e atividades."
      />
      <Beneficio
        icon={Clipboard}
        titulo="Organização"
        subtitulo=" Acompanhamento da presença das crianças."
      />
      <Beneficio
        icon={TrendingUp}
        titulo="Acesso Simples"
        subtitulo="Interface fácil de usar para todos."
      />
    </div>
  );
}

export default Beneficios;
