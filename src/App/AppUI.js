import React from 'react'

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch"
import { TodoList } from "../TodoList"
import {CreateTodoButton} from "../CreateTodoButton"
import { TodoItem } from "../TodoItem";

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    setSearchValue,
    searchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <React.Fragment>
        <TodoCounter 
            total = {totalTodos}
            completed = {completedTodos}
        />

        <TodoSearch 
            setSearchValue = {setSearchValue}
            searchValue = {searchValue} 
        />

        <TodoList>
            {error && <p>Desesperate, hubo un error</p> }
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.lenght) && <p>Crea tu primer todo</p>}
            {
                searchedTodos.map(todo => (
                    < TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed = {todo.completed}
                    onComplete = {() => completeTodo(todo.text)}
                    onDelete = {() => deleteTodo(todo.text)}
                    />
            )) 
            }
        </TodoList>

        <CreateTodoButton />
            
    </React.Fragment>
    )
}

export {AppUI}