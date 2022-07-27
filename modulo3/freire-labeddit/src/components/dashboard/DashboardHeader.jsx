import styled from "styled-components"
import { Colors } from "../../styles/Colors"
import { RiUser3Line, RiSearchLine } from "react-icons/ri"

const HeaderBox = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4em;
  background-color: ${Colors.black};
  box-shadow: 0 0 0.5em rgba(0,0,0,0.75);
  h1 {
    width: 100%;
    color: ${Colors.white};
    font-size: min(2.5em, 12vw);
    font-weight: 600;
    text-align: center;
    background-image: linear-gradient(240deg, ${Colors.purple}, ${Colors.pink});
    background-clip: 1;
    color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  svg {
    min-width: 1em;
    font-size: min(2em, 8vw);
    color: ${Colors.white};
    transition: all 0.1s ease-in-out;
    :active {
      transform: scale(0.9);
    }
  }
`
export const DashboardHeader = () => {
  return (
    <HeaderBox>
      <RiUser3Line style={{marginLeft:"0.5em"}}/>
      <h1>LabEddit</h1>
      <RiSearchLine style={{marginRight:"0.5em"}}/>
    </HeaderBox>
  )
}