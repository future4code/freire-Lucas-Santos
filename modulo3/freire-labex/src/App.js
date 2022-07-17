import { DivFullPage } from "./components/GlobalStyledComps";
import { RouterFlow } from "./router/RouterFlow";
import { Background } from "./components/Background";
import { Header } from "./components/Header";

function App() {
  return (
    <DivFullPage minH="100%">
      <Background />
      <Header />
      <RouterFlow />
    </DivFullPage>
  );
}
export default App;