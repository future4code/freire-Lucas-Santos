import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

/*Components*/
import { Menu } from './components/Footer/IconMenu/Menu'
import { Player } from './components/Footer/MusicPlayer/Player'

function App() {
    
    /*Controla qual opção do menu está selecionada*/
    const [selected, setSelected] = useState("home");

    /*Controla o estado do player*/
    const [playing, setPlaying] = useState(false);

    return (
        <div className="App">
            <header>

            </header>

            <main>
                
            </main>

            <footer>
                <Player 
                    playing={playing}
                    setPlaying={setPlaying}
                />

                <Menu 
                    selected={selected}
                    setSelected={setSelected}
                />
            </footer>
        </div>
    )
}

export default App
