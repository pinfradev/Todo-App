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

function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName)
    let parsedItem

    if(localStorageItem) {
        parsedItem = JSON.parse(localStorageItem)
    } else {
        localStorage.setItem('itemName', JSON.stringify(initialValue))
        parsedItem = initialValue
    }

    const [item, setItem] = React.useState(parsedItem)

    const saveItem = (newItem) => {
        const stringifiedItem =  JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItem)
        setItem(newItem)
    }

    return [item, saveItem]
}

function App() {
    
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
   
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
        const newItems = [...todos]
        newItems[todoIndex].completed = true
        // todos[todoIndex] = {
        //     text: todos[todoIndex].text,
        //     completed: true
        // }
        saveTodos(newItems)
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text == text)
        const newItems = [...todos]
        newItems.splice(todoIndex, 1)
        saveTodos(newItems)
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
