import axios from "axios";
import React from "react";
import { useState } from "react";

export const Login = ({ inputs, setInputs, setBtnOption, setUsersList }) => {

    const [tempUsersList, setTempUsersList] = useState([]);

    const handleLogin = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "lucas-monteiro-freire"
            }
        })
        .then((res) => {
            setTempUsersList(res.data)

            const user = tempUsersList.find((user) => {
                return user.name === inputs.name
            }).id

            user && 
                console.log("Deu bom")
                alert("Login realizado com sucesso!")
                setBtnOption("home")
                setUsersList(tempUsersList)

        }).catch((err) => {
            console.log(err.response)

            err.responde === undefined ?
                alert("Usuário não cadastrado!") :
                alert("Erro ao realizar login!")
        })
    }
        

    return (
        <div className="tela-login">
            <input
                type="text"
                placeholder="Digite seu nome..."
                name="name"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            />

            <br />
            <br />
            
            <button onClick={handleLogin}>LOGIN</button>
        </div>
    )

}