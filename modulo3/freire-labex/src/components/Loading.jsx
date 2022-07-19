import { Player } from '@lottiefiles/react-lottie-player';
import { DivFullPage } from './GlobalStyledComps';

export const Loading = () => {
  return (
    <DivFullPage pad="2em" zIndex="4" position="fixed" bg="rgba(0, 0, 0, 0.95)">
      <Player
        autoplay={true}
        loop={true}
        src="https://assets7.lottiefiles.com/packages/lf20_yh9zph2x.json"
        style={{ height: "50vh", transition: "all 0.4s" }}
      />
    </DivFullPage>
  );
}