import styled from "styled-components"

const Video = styled.video`
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
`
export const Background = () => {
  return (
    <Video autoPlay loop muted type="video/webm"
      src="https://firebasestorage.googleapis.com/v0/b/monsan-dev.appspot.com/o/LabeX%2Fbackground.webm?alt=media&token=f0348065-3d40-4521-8bc6-696dd5c14e07"      
    />
  )
}