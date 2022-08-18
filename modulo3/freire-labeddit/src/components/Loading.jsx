import { useEffect } from "react";
import styled from "styled-components"
import { Colors } from "../styles/Colors"
import { Player } from '@lottiefiles/react-lottie-player';

const Section = styled.section`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.25s ease-in-out;
`
const Grayout = styled.div`
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.black};
  opacity: 0.95;
`
export const Loading = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".section").style.opacity = "1";
    }, 100);
  }, []);
  return (
    <Section className="section">
      <Grayout />
      <Player
        className="lottie-player"
        autoplay={true}
        loop={true}
        src="https://assets5.lottiefiles.com/packages/lf20_do8l2osy.json"
        style={{ height: "30vh" }}
      />
    </Section>
  )
}