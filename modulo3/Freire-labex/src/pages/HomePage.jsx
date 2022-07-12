import "../styles/HomePage.css";

//Components
import { Header } from "../components/Header.jsx";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />

      <div className="text-box">
        <strong className="top">O UNIVERSO ESTÁ</strong>
        <strong className="middle">ESPERANDO</strong>
        <strong className="bottom">POR VOCÊ</strong>
      </div>

      <div className="button-box">
        <a href="#">
          <strong className="top">FAZER</strong>
          <strong className="bottom">LOGIN</strong>
        </a>
      
        <a href="#">
          <strong className="top">LISTA DE</strong>
          <strong className="bottom">VIAGENS</strong>
        </a>
      </div>
    </div>
  )
}