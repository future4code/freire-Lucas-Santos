import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

/*COMPONENTS*/
import { Cadastrar } from './components/Cadastrar'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Buttons } from './components/Buttons'

function App() {
    const [btnOption, setBtnOption] = useState("login")

    const [inputs, setInputs] = useState({
        email: "",
        name: "",
    })

    const [usersList, setUsersList] = useState([])

    return (
        <div className="App">
            <div className='login-cadastro'>

                {btnOption !== "home" &&
                    <Buttons
                        setBtnOption={setBtnOption}
                    />
                }
                

                {btnOption === "login" && 
                    <Login 
                        inputs={inputs}
                        setInputs={setInputs}

                        setBtnOption={setBtnOption}

                        setUsersList={setUsersList}
                    />
                }

                {btnOption === "cadastro" && 
                    <Cadastrar
                        inputs={inputs}
                        setInputs={setInputs} 
                    />
                }

                {btnOption === "home" &&
                    <Home 
                        usersList={usersList}
                    />
                }
            </div>
        </div>
    )
}

export default App
