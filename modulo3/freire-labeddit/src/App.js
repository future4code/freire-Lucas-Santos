// import logo from './logo.svg';
import styled from "styled-components";
import { RouterFlow } from "./routes/RouterFlow";
import { Background } from "./components/Background"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

function App() {
  return (
    <Main>
      <Background />
      <RouterFlow />
    </Main>
  );
}

export default App;
