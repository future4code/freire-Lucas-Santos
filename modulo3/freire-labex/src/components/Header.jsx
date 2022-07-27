import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../routers/RouterFlow";
import { TextM } from "./GlobalStyledComps";
import logo from "../assets/logo.png";

const Nav = styled.nav`
  z-index: 2;
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
  color: var(--color-w);
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
        <img src={logo} alt="logo" onClick={() => goToHome(navigate)} />
      </div>
      
      {window.localStorage.getItem("token") &&
        <div>
          <TextM style={{cursor: "pointer"}} onClick={() => logout()}>LOGOUT</TextM>
        </div>
      }
    </Nav>
  )
}