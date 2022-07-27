import styled from "styled-components"
import { Colors } from "../styles/Colors"
import { RiSearchLine } from "react-icons/ri"

const HeaderBox = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
  width: 100%;
  height: 4em;
  background-color: ${Colors.black};
  box-shadow: 0 0 0.5em rgba(0,0,0,0.75);
  h1 {
  margin-left: 0.2em;
  color: ${Colors.white};
  font-size: min(2.5em, 12vw);
  font-weight: 600;
  background-image: linear-gradient(240deg, ${Colors.purple}, ${Colors.pink});
  background-clip: 1;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
  svg {
    width: fit-content;
    margin-right: 0.5em;
    color: ${Colors.white};
    transition: all 0.1s ease-in-out;
    :active {
      transform: scale(0.9);
    }
  }
`
export const Header = () => {
  return (
    <HeaderBox>
      <h1>Dashboard</h1>
      <RiSearchLine size="1.75em" color={Colors.brown}/>
    </HeaderBox>
  )
}