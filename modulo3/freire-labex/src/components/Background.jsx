import styled from "styled-components"

const Video = styled.video`
  z-index: 0;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards normal;
  @keyframes fadeIn {from{opacity: 1}}
`
export const Background = () => {
  return (
    <Video id="bg-video" autoPlay loop muted type="video/webm"
      src="https://firebasestorage.googleapis.com/v0/b/monsan-dev.appspot.com/o/LabeX%2FLabeX.webm?alt=media&token=399e6722-c36c-469c-8a2f-298c06555545"      
    />
  )
}