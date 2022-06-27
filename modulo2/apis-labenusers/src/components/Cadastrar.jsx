import React from "react";
import axios from "axios";

export const Cadastrar = ({ inputs, setInputs }) => {

    const handleRegister = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

        const body = {
            name: inputs.name,
            email: inputs.email,
        };

        axios.post(url, body, {
            headers: {
                Authorization: "lucas-monteiro-freire"
            }
        }).then(() => {
            alert("Usuário cadastrado com sucesso!");

            setInputs({
                name: "",
                email: "",
            });
        }).catch((err) => {
            err.response.data.message === "There is an user with this name or this email" ?
                alert("Usuário já cadastrado!") :
                alert("Erro ao cadastrar usuário!");
        });
    }

    return (
        <div className="tela-cadastrar">
            <input
                type="text"
                placeholder="Digite seu nome..."
                name="name"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            />

            <br />

            <input
                type="email"
                placeholder="Digite seu email..."
                name="email"
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />

            <br />
            <br />

            <button onClick={handleRegister}>CADASTRAR</button>
        </div>
    )
}