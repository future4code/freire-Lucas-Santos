import styled from "styled-components";
import logo from "../images/logo.svg";

const Nav = styled.nav`
  z-index: 2;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 98%;
  height: 4em;
  padding: 0.5em;
  border-bottom: solid 0.15em #EBEBEB;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    width: fit-content;
    height: 100%;
    img {
      height: 100%;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      height: 100%;
      color: #EBEBEB;
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
        <a>QUEM SOMOS?</a>
      </div>
      <div>
        <a>Olá, viajante!</a>
      </div>
    </Nav>
  )
}