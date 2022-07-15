import './App.css';
import styled from 'styled-components';
import { RouterFlow } from "./router/RouterFlow";
import { BoxFullPage } from "./components/StyledComps";
import { Background } from "./components/Background";
import { Header } from "./components/Header";

function App() {
  return (
    <BoxFullPage>
      <Background />
      <Header />
      <RouterFlow />
    </BoxFullPage>
  );
}
export default App;