import "../styles/Header.css";
//Router n Routes
import { useNavigate } from "react-router-dom";
import { goTo } from "../router/RouterFlow";
//Images
import logo from "../images/logo.svg";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <div className="logo-box">
        <img className="logo" src={logo} alt="Ícone do logo do site" />
        <a onClick={() => goTo(navigate, "/who-we-are")}>Quem somos?</a>
      </div>
      <a onClick={() => goTo(navigate, "/profile")} >Olá, viajante!</a>   
    </div>
  )
}