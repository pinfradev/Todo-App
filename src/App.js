import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch"
import { TodoList } from "./TodoList"
import {CreateTodoButton} from "./CreateTodoButton"
import { TodoItem } from "./TodoItem";

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
                {
                    todos.map(todo => (
                        < TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed = {todo.completed}/>
                )) 
                }
            </TodoList>

            <CreateTodoButton />
                
        </React.Fragment>
    )
}

export default App;
