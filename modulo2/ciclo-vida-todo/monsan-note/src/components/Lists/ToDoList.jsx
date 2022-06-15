import React from "react";
import './ToDoList.css';

import { IoMdTrash } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { MdEdit } from "react-icons/md";

export const ToDoList = ({tasks,selected}) => {
    return (
        <div className="do-list">
            <ul>
                {tasks.filter(task => task.status === selected).map(task => (
                    <li key={task.id}>
                        <div className="task-text">
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                        </div>

                        <div className="task-icons">
                            <button>
                                <IoMdTrash size={30} />
                            </button>

                            <button>
                                <IoMdCheckmark size={40} />
                            </button>

                            <button>
                                <MdEdit size={30} />
                            </button>                            
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}