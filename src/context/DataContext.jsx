import { createContext } from 'react'

export const DataContext = createContext()

const num = 5

export const DataProvider = ({ children }) => {
    return (
        <DataContext.Provider value={{ num }}>
            {children}
        </DataContext.Provider>

    )
}