import "../styles/HomePage.css";

//Router
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  }

  return (
    <div className="HomePage">
      <div className="text-box">
        <strong className="top">O UNIVERSO ESTÁ</strong>
        <strong className="middle">ESPERANDO</strong>
        <strong className="bottom">POR VOCÊ</strong>
      </div>

      <div className="button-box">
        <button onClick={() => goTo("/login")}>
          <strong className="top">FAZER</strong>
          <strong className="bottom">LOGIN</strong>
        </button>
      
        <button onClick={() => goTo("/list")}>
          <strong className="top">LISTA DE</strong>
          <strong className="bottom">VIAGENS</strong>
        </button>
      </div>
    </div>
  )
}