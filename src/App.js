import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch"
import { TodoList } from "./TodoList"
import {CreateTodoButton} from "./CreateTodoButton"
import { TodoItem } from "./TodoItem";

import React from "react";

const todos = [
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
        completed: false
    },
    {
        text: 'ALALALAL',
        completed: false
    }
];

function App() {
    return (
        <React.Fragment>
            <TodoCounter />

            <TodoSearch />

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
