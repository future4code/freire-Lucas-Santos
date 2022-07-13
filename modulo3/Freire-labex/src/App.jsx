import "./styles/App.css";

//Routes
import { RouterFlow } from "./router/RouterFlow";

//Components
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="Background-box">
        <video 
          autoPlay loop muted playsInline 
          src="https://firebasestorage.googleapis.com/v0/b/monsan-dev.appspot.com/o/LabeX%2Fbackground.webm?alt=media&token=f0348065-3d40-4521-8bc6-696dd5c14e07"
          type="video/webm" 
        />
      </div>

      <RouterFlow />
    </div>
  )
}
export default App