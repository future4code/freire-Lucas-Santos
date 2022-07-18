import styled from "styled-components"
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
    <Video preload="auto" autoPlay loop muted type="video/webm" 
      src="https://firebasestorage.googleapis.com/v0/b/monsan-dev.appspot.com/o/LabeX%2FLabeX.webm?alt=media&token=399e6722-c36c-469c-8a2f-298c06555545"
    />   
  )
}