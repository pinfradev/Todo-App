import React from "react";
import './CreateButton.css'

function CreateTodoButton({setOpenModal}) {

    const onClickButton = (msg) => {
        setOpenModal(true)
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