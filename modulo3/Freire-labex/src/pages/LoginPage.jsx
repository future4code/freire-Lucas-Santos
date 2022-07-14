import { useEffect } from "react";
import "../styles/LoginPage.css";
//Router n Routes
import { useNavigate } from "react-router-dom";
import { goTo } from "../router/RouterFlow";

export const LoginPage = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".LoginPage").style.opacity = 1;
      document.querySelector("#email").focus();
    }, 100);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="LoginPage">
      <div className="input-box">
        <input id="email" type="email" placeholder="E-MAIL"/>
        <input type="password" placeholder="SENHA"/>
      </div>      
      <br />
      <div className="button-box">
        <button className="back" onClick={() => goTo(navigate, "/")}>
          <strong>X</strong>
        </button>
        <button className="login">
          <strong>LOGIN</strong>
        </button>
      </div>
    </div>
  )
}