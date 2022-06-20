import React from "react";
import './TasksIndex.css';

export const NewTasks = ({statusInput,setStatusInput}) => {
    return (
        <div className="new-tasks">
            <div className="text-box">
                <input 
                    type="text" 
                    placeholder="Título"
                    value={statusInput.title}
                    onChange={(e) => setStatusInput({...statusInput, title: e.target.value})}
                />
                <textarea 
                    placeholder="Descrição"
                    value={statusInput.description}
                    onChange={(e) => setStatusInput({...statusInput, description: e.target.value})}
                />
            </div>

            <select name="" id="" value={statusInput.status} onChange={(e) => setStatusInput({...statusInput, status: e.target.value})}>
                <option value="do">A FAZER</option>
                <option value="doing">FAZENDO</option>
                <option value="done">FEITO</option>
            </select>
        </div>
    );
}