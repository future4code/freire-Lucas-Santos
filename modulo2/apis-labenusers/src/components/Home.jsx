import React from "react";

export const Home = ({ usersList }) => {
    return (
        <div className="tela-home">
                <ul>
                    {usersList.map((user) => {
                        return (
                            <li key={user.id}>
                                {user.name}
                            </li>
                        )
                    })}
                </ul>
        </div>
    )
}