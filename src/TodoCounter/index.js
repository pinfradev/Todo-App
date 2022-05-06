import React from "react"
import './TodoCounter.css'
import {TodoContext} from '../TodoContext'

function TodoCounter() {
    const {completedTodos: completed, totalTodos} = React.useContext(TodoContext)

    return (
        <h2 className="TodoCounter">Has completado {completed} de {totalTodos} TODOs</h2>
    )
}

export {TodoCounter}