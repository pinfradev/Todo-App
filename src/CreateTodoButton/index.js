import React from "react";
import './CreateButton.css'

function CreateTodoButton({openModal, setOpenModal}) {

    const onClickButton = (msg) => {
        setOpenModal(!openModal)
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