import { render } from "@testing-library/react"
import React from "react"
import './TodoSearch.css'

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('')

    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return [
        <input 
        onChange={onSearchValueChange}
        className="TodoSearch" 
        placeholder="cebollas"
        value={searchValue}
        />,
        <p>{searchValue}</p>
    ]
}

export {TodoSearch}