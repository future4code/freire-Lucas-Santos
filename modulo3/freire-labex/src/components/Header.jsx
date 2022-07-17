import styled from "styled-components";
import logo from "../images/logo.svg";

const Nav = styled.nav`
  z-index: 3;
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
  return (
    <Nav>
      <div>
        <img src={logo} alt="logo" />
        <a href="/admin">QUEM SOMOS?</a>
      </div>
      <div>
        <a>Olá, viajante!</a>
      </div>
    </Nav>
  )
}