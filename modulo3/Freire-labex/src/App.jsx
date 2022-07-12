import "./styles/App.css";

//Pages
import { HomePage } from './pages/HomePage.jsx';

function App() {
  return (
    <div className="App">
      <div className="Background-box">
        <video 
          autoPlay loop 
          src="https://firebasestorage.googleapis.com/v0/b/monsan-dev.appspot.com/o/LabeX%2Fbackground.webm?alt=media&token=f0348065-3d40-4521-8bc6-696dd5c14e07" 
          type="video/webm" 
        />
      </div>      
    </div>
  )
}
export default App