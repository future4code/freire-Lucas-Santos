import React from "react";
import './ButtonsIndex.css';

import { MdAdd } from 'react-icons/md';
import { IoMdClose } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";

export const AddTask = ({actions,setActions,statusInput,setStatusInput,tasks,setTasks}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatusInput({
            id: (tasks.length),
        });
        setTasks([...tasks, statusInput]);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        setActions("Home");
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setActions("Home");
    }

    const handleNewTask = (e) => {
        e.preventDefault();
        setActions("NewTask");
        setStatusInput({
            title: "",
            description: "",
            status: "do"
        });
    }

    return (
        <div className="add-new-task">

            {actions === "Home" &&
                <div>
                    <label htmlFor="new-task" onClick={(handleNewTask)}>
                        <MdAdd size={50} />
                    </label>
                </div>         
            }

            {(actions === "NewTask") && (statusInput.title === "" || statusInput.description === "") &&
                <div>
                    <label htmlFor="new-task" onClick={(handleCancel)}>
                        <IoMdClose size={50} />
                    </label>
                </div> 
            }

            {(actions === "NewTask" && statusInput.title !== "" && statusInput.description !== "") &&
                <div>
                    <label htmlFor="new-task" onClick={handleSubmit}>
                        <IoMdCheckmark size={50} />
                    </label>
                </div>
            }
                
        </div>
    );
}