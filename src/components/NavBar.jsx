import { useContext } from 'react'
import { Navbar, Switch, changeTheme, useTheme } from "@nextui-org/react"
import { NavLink } from "react-router-dom"
import { DataContext } from '../context/DataContext'


const NavBar = () => {
  const { favorites } = useContext(DataContext)

  const { type, isDark } = useTheme()
  const handleChange = () => {
    const nextTheme = isDark ? 'light' : 'dark'
    window.localStorage.setItem('data-theme', nextTheme)
    changeTheme(nextTheme)
  }
  return (
      <Navbar isBordered style={{ marginBottom: 30 }}>
        <Navbar.Brand>
        <NavLink to="/" >
          Callytek
          </NavLink>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <NavLink to="/" >
            Inicio
          </NavLink>
          <NavLink to="/favoritos" >
            Favoritos
            ({favorites.length})
          </NavLink>
          {/* The current theme is: {type} */}
          <Switch
            checked={isDark}
            onChange={handleChange}
          />

        </Navbar.Content>
      </Navbar>
  )
}

export default NavBar