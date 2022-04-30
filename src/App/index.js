import { AppUI } from "./AppUI";

import React from "react";

const todosDefault = [
    {
        text: 'Cortar cebolla',
        completed: true
    },
    {
        text: 'Tomar el curso de intro a React',
        completed: false
    },
    {
        text: 'Llorar con la llorona',
        completed: true
    },
    {
        text: 'ALALALAL',
        completed: false
    }
];

function App() {
    const [todos, setTodos] = React.useState(todosDefault)
    const [searchValue, setSearchValue] = React.useState('')

    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length
    let searchedTodos = []

    if (searchValue.length >= 1) {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase()
            const searchText = searchValue.toLowerCase()

            return todoText.includes(searchText)
        })
    } else {
        searchedTodos = todos
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text == text)
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
        // todos[todoIndex] = {
        //     text: todos[todoIndex].text,
        //     completed: true
        // }
        setTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text == text)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        setTodos(newTodos)
    }

    return (
        <AppUI
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
            searchedTodos={searchedTodos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
        />
    )
}

export default App;
