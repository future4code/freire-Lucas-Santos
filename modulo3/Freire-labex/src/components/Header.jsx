import "../styles/Header.css";

//Images
import logo from "../images/logo.svg";

export const Header = () => {
  return (
    <div className="Header">
      <div className="logo-box">
        <img className="logo" src={logo} alt="Ícone do logo do site" />
        <a href="#">Quem somos?</a>
      </div>

      <a href="#" >Olá, viajante!</a>   
    </div>
  )
}