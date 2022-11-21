import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Favoritos from './pages/Favoritos'
import { DataProvider } from './context/DataContext'

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  )
}

export default App
