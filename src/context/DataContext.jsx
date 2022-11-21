import { createContext, useState } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [num, setNum] = useState(5)

    const [favorites, setFavorites] = useState([])

    return (
        <DataContext.Provider value={{
            num,
            setNum,
            favorites,
            setFavorites
        }}>
            {children}
        </DataContext.Provider>
    )
}