import React from 'react'
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider(props) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error } = useLocalStorage('TODOS_V1', [])

    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)
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



    const addTodo = (text) => {
        const newItems = [...todos]
        newItems.push({
            completed: false,
            text: text
        })
        saveTodos(newItems)
    }
    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newItems = [...todos]
        newItems[todoIndex].completed = true
        saveTodos(newItems)
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newItems = [...todos]
        newItems.splice(todoIndex, 1)
        saveTodos(newItems)
    }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            setSearchValue,
            searchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}
export {TodoContext, TodoProvider}