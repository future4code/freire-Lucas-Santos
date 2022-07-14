import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

/*API*/
import { getProfileToChoose, getMatches } from './api/infos'

/*Pages*/
import { Home } from './pages/Home'
import { Matches } from './pages/Matches'

/*Components*/
import { MatchUnmatch } from './components/buttons/MatchUnmatch'
import { NavFooter } from './components/menu/NavFooter'

/*Components - Modal*/
import { NullProfile } from './components/modal/NullProfile'

function App() {
    /*Armazena o nome da página atual*/
    const [page, setPage] = useState("home")

    /*Armazena o objeto com as informações de cada perfil (um de cada vez)*/
    const [profile, setProfile] = useState({})

    /*Armazena a lista de perfis que o usuário escolheu*/
    const [matchs, setMatchs] = useState([]);

    /*Gatilho para carregar um novo perfil*/
    const [triggerNewProfile, setTriggerNewProfile] = useState(0)

    /*Gatilho para mostrar ou esconder os botões de match e unmatch*/
    const [showButtons, setShowButtons] = useState(false)

    /*Gatilho para mostrar ou esconder a tela quando o usuário não tem perfis disponíveis*/
    const [showNullProfile, setShowNullProfile] = useState(false)

    useEffect((e) => {
        /*Pega um perfil aleatório na API e armazena no estado (profile)*/
        const getProfile = async () => {
            await axios.get(getProfileToChoose)
            .then(response => {
                if (response.data.profile !== null) {
                    setProfile(response.data.profile)
                    setShowButtons(true)
                    setShowNullProfile(false)
                } else {
                    setProfile({})
                    setShowButtons(false)
                    setShowNullProfile(true)
                }
            })
            .catch(error => {
                getProfile()
            })
        }

        /*Pega a lista de matches na API e armazena no estado (matchs)*/
        const getMatchs = async () => {
            await axios.get(getMatches) 
            .then(response => {
                setMatchs(response.data.matches)
            })
            .catch(error => {
                getMatchs()
            })
        }

        getProfile()
        getMatchs()
    }, [triggerNewProfile])

    useEffect((e) => {
        const app = document.querySelector(".App")

        if (page === "home") {
            app.style.height = "100vh"
        } else {
            app.style.height = "100%"
            app.style.minHeight = "100vh"
        }
    }, [page])

    return (
        <div className="App">
            {page === "home" && !showNullProfile && 
                <Home 
                    profile={profile} 
                    showButtons={showButtons}
                />
            }
            {page === "matchs" && <Matches matchs={matchs} />}

            <NavFooter 
                page={page} 
                setPage={setPage} 

                showButtons={showButtons}
                showNullProfile={showNullProfile}            
            />

            {page === "home" && 
                <MatchUnmatch 
                    profile={profile} 
                    page={page} 
                    triggerNewProfile={triggerNewProfile} 
                    setTriggerNewProfile={setTriggerNewProfile} 
                    showButtons={showButtons}
                    setShowButtons={setShowButtons}
                />
            }

            {showNullProfile && page === "home" && <NullProfile showNullProfile={showNullProfile}/>}
        </div>
    )
}
export default App