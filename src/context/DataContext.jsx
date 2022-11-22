import { createContext, useState } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([])

    return (
        <DataContext.Provider value={{
            favorites,
            setFavorites
        }}>
            {children}
        </DataContext.Provider>
    )
}