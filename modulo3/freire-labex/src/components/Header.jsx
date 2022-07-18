import styled from "styled-components";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { goToCreateTrip, goToHome } from "../routers/RouterFlow";

const Nav = styled.nav`
  z-index: 1;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4em;
  padding: 0.5em;
  opacity: 0;
  text-align: center;
  line-height: 1.5em;
  background-color: rgba(17, 21, 29, 0.5);
  backdrop-filter: blur(0.75em);
  border-bottom: solid 0.15em var(--color-1b);
  box-shadow: var(--shadow);
  animation: fadeIn 1s ease-in-out forwards;
  @keyframes fadeIn {to {opacity: 1;}}
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    width: fit-content;
    height: 100%;
    img {
      cursor: pointer;
      height: 100%;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      height: 100%;
      color: var(--color-w);
      font-size: 1.4rem;
      font-weight: bold;
      text-decoration: none;
    }
  }  
`
export const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    goToHome(navigate);
  }

  return (
    <Nav>
      <div>
        <img onClick={() => goToHome(navigate)} src={logo} alt="logo" />
      </div>
      
      {window.localStorage.getItem("token") &&
        <div>
          <a onClick={() => goToCreateTrip(navigate)}>CADASTRAR VIAGEM</a>
        </div>
      }

      {window.localStorage.getItem("token") &&
        <div>
          <a onClick={() => logout()}>LOGOUT</a>
        </div>
      }
    </Nav>
  )
}