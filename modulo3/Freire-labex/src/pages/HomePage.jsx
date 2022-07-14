import { useEffect } from "react";
import "../styles/HomePage.css";

//Router n Routes
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".HomePage").style.opacity = 1;
    }, 100);
  }, []);
  const navigate = useNavigate();
  const fadeOut = (path) => {
    document.querySelector(".HomePage").style.opacity = 0;
    setTimeout(() => {
      navigate(path);
    }, 250);
  }
  return (
    <div className="HomePage">
      <div className="text-box">
        <strong className="top">O UNIVERSO ESTÁ</strong>
        <strong className="middle">ESPERANDO</strong>
        <strong className="bottom">POR VOCÊ</strong>
      </div>
      <br />
      <div className="button-box">
        <button onClick={() => fadeOut("/login")}>
          <strong className="top">FAZER</strong>
          <strong className="bottom">LOGIN</strong>
        </button>      
        <button onClick={() => goTo(navigate, "/list")}>
          <strong className="top">LISTA DE</strong>
          <strong className="bottom">VIAGENS</strong>
        </button>
      </div>
    </div>
  )
}