import styled from "styled-components"
import bgVideo from "../assets/LabeX.webm"
import { useEffect } from "react"

const Video = styled.video`
  z-index: -1;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
`
export const Background = () => {
  useEffect(() => {document.querySelector("video").playbackRate = 0.75}, [])
  return (
    <Video preload="auto" autoPlay loop muted type="video/webm" src={bgVideo} />   
  )
}