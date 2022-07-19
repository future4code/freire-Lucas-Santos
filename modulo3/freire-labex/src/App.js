import { DivFullPage } from "./components/GlobalStyledComps";
import { RouterFlow } from "./routers/RouterFlow";
import { Background } from "./components/Background";
import { Header } from "./components/Header";

function App() {
  return (
    <DivFullPage minH="100%" pad="0px">
      <Background />
      <RouterFlow />
    </DivFullPage>
  );
}
export default App;