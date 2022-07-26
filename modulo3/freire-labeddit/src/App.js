// import logo from './logo.svg';
import styled from "styled-components";
import { RouterFlow } from "./routes/RouterFlow";
import { Colors } from "./styles/Colors";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 1em;
  background-color: ${Colors.black};
`

function App() {
  return (
    <Main>
      <RouterFlow />
    </Main>
  );
}

export default App;
