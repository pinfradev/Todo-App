import React from "react";
import './CreateButton.css'
function CreateTodoButton() {

    const onClickButton = (msg) => {
        alert(msg)
    }

    return (
        <button 
        className="CreateTodoButton"
        onClick={() => onClickButton('Aqui se deberia abrir el modal')}
        >
            +
        </button>
    )
}

export {CreateTodoButton}