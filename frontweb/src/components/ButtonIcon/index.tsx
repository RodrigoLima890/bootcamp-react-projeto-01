import "./style.css";
import { ReactComponent as SetaIcon } from "../../assets/imagens/Seta.svg";
const ButtonIcon = () => {
  return (
    <div className="btn-container">
      <button className="btn btn-primary">
        <h6>Inicie Agora Sua Busca</h6>
      </button>
      <div className="btn-icon-container">
        <SetaIcon />
      </div>
    </div>
  );
};
export default ButtonIcon;
