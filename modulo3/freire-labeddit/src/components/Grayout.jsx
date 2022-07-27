import styled from "styled-components"
import { Colors } from "../styles/Colors"

const Div = styled.div`
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.black};
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`
export const Grayout = () => {
  return (
    <Div></Div>
  )
}