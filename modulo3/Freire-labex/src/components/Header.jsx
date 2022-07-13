import "../styles/Header.css";

//Router
import { useNavigate } from "react-router-dom";

//Images
import logo from "../images/logo.svg";

export const Header = () => {
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  }

  return (
    <div className="Header">
      <div className="logo-box">
        <img className="logo" src={logo} alt="Ícone do logo do site" />
        <a onClick={() => goTo("/who-we-are")}>Quem somos?</a>
      </div>

      <a onClick={() => goTo("/profile")} >Olá, viajante!</a>   
    </div>
  )
}