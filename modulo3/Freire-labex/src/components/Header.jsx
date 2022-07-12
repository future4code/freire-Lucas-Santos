import "../styles/Reset_Default.css";

//Images
import logo from "../icons/logo.svg";

//Stitches Tags
import { Img, Strong, Span } from "../styles/Comps.jsx";

export const Header = () => {
  return (
    <div className="Header">
      <Img type="logo" src={logo} alt="logo" />
      <Strong size="md" type="link">Quem somos?</Strong>
      <Strong size="md" type="link">Olá, viajante!</Strong>
    </div>
  )
}