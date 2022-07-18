import styled from "styled-components"
import { useEffect } from "react"

const Video = styled.video`
  z-index: -1;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center;
`
export const Background = () => {
  useEffect(() => {document.querySelector("video").playbackRate = 0.75}, [])
  return (
    // <Video preload="auto" autoPlay loop muted type="video/webm" 
    //   src="https://firebasestorage.googleapis.com/v0/b/monsan-dev.appspot.com/o/LabeX%2FLabeX.webm?alt=media&token=8dd5abfb-0caa-46e4-aa59-e586de98ed77"
    // /> 
    <Video preload="auto" autoPlay loop muted type="video/webm" 
      src="https://rr3---sn-uxaxh5g-jo4l.googlevideo.com/videoplayback?expire=1658164955&ei=e0LVYoGuD5PlgQeUrKTICw&ip=172.94.5.100&id=o-AOdhDe3jS_s5xOZskgePYbo2RBC46XLTHiLASQe8heKO&itag=308&source=youtube&requiressl=yes&vprv=1&mime=video%2Fwebm&gir=yes&clen=217685796&dur=179.982&lmt=1645169789355448&keepalive=yes&fexp=24001373,24007246&c=ANDROID&txp=5319224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgWZz5h2sFzsdzgLbjs3heCGi84uvu0Jxe5pDRp2Iur24CIQDFKcdGF7WFhJFoRsI0fd9y5weL4w6_XWlWhUqKtnjHWw%3D%3D&title=Galaxy%20in%204K%20%E2%95%91%20Animation%20Overlay%20for%20Edits%20%E2%95%91%20Motion%20Background%20Free%20Beautiful%20HD%20Video%20Effect&redirect_counter=1&rm=sn-o09sk7s&req_id=89546c0837d7a3ee&cms_redirect=yes&ipbypass=yes&mh=Kq&mip=2804:d45:c866:eb00:ffe:f0ab:ce19:f704&mm=31&mn=sn-uxaxh5g-jo4l&ms=au&mt=1658145409&mv=m&mvi=3&pl=43&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAOQorTXKUj2_ZLkp4xTvTjnhP3hLQ2ubxMvBotewbbSjAiA7N58061q2G4DwQcMUjFloihsQ9geClSuqj78mbXO2aA%3D%3D"
    />  
  )
}