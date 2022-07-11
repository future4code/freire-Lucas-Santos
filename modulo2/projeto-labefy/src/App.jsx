import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

/*Components*/

function App() {
    
    /*Controla qual opção do menu está selecionada*/
    const [selected, setSelected] = useState("home");

    /*Controla o estado do player*/
    const [playing, setPlaying] = useState(false);

    return (
        <div className="App">
            
        </div>
    )
}

export default App
