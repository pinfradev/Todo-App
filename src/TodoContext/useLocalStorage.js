import React from 'react'
function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue)

    React.useEffect(() => {
        try {
        setTimeout(() => {
            const localStorageItem = localStorage.getItem(itemName)
            let parsedItem
        
            if(localStorageItem) {
                parsedItem = JSON.parse(localStorageItem)
            } else {
                localStorage.setItem(itemName, JSON.stringify(initialValue))
                parsedItem = initialValue
            }

            setItem(parsedItem)
            setLoading(false)
        }, 4000)
    } catch(error) {
        setError(error)
    }
    }, [])

    const saveItem = (newItem) => {
        try{
        const stringifiedItem =  JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItem)
        setItem(newItem)
        } catch(error) {
            setError(error)
        }
    }

    return {
        item,
         saveItem,
         loading,
         error
        }
}

export {useLocalStorage}