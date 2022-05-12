import React from 'react'

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch"
import { TodoList } from "../TodoList"
import { CreateTodoButton } from "../CreateTodoButton"
import { TodoItem } from "../TodoItem";
import { TodoContext } from '../TodoContext'
import {Modal} from '../Modal'
import {TodoForm} from '../TodoForm'
function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <TodoCounter />

            <TodoSearch />

            <TodoList>
                {error && <p>Desesperate, hubo un error</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !searchedTodos.lenght) && <p>Crea tu primer todo</p>}
                {
                    searchedTodos.map(todo => (
                        < TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))
                }
            </TodoList>

            {!!openModal &&
            <Modal>
                <TodoForm/>
            </Modal>}

            <CreateTodoButton 
            setOpenModal = {setOpenModal}
            />

        </React.Fragment>
    )
}

export { AppUI }