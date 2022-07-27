import styled from "styled-components"
import { Colors } from "../styles/Colors"
import { RiArrowLeftSLine, RiAddFill, RiUser3Line, RiUser3Fill } from "react-icons/ri"

const FooterBox = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  width: 100%;
  height: 5em;
  padding-bottom: 0.25em;
  background-color: #111014;
  box-shadow: 0 0 0.5em rgba(0,0,0,0.5);
  svg {
    width: 100%;
    transition: all 0.1s ease-in-out;
    &#btnAdd {
      max-width: 3em;
      padding: 0.5em;
      background-image: linear-gradient(to right, ${Colors.pink}, ${Colors.purple});
      border-radius: 100%;
    }
    :active {
      transform: scale(0.9);
    }
  }
`
export const Footer = () => {
  return (
    <FooterBox>
      <RiArrowLeftSLine size="2em" color={Colors.brown}/>
      <RiAddFill id="btnAdd" size="3em" color={Colors.white}/>
      <RiUser3Line size="1.5em" color={Colors.brown}/>
    </FooterBox>
  )
}