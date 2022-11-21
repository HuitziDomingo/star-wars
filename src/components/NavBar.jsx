import { Navbar, Switch, changeTheme, useTheme } from "@nextui-org/react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  const { type, isDark } = useTheme()
  const handleChange = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    window.localStorage.setItem('data-theme', nextTheme); // you can use any storage
    changeTheme(nextTheme);
  }
  return (
    <div>
      <Navbar isBordered style={{ marginBottom: 30 }}>
        <Navbar.Brand>
          Callytek 
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <NavLink to="/" >
            Inicio
          </NavLink>
          <NavLink to="/favoritos" >
            Favoritos
          </NavLink>
          {/* The current theme is: {type} */}
          <Switch
            checked={isDark}
            onChange={handleChange}
          />
          
        </Navbar.Content>
      </Navbar>
    </div>
  )
}

export default NavBar