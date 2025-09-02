import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login.jsx'
import { Cadastro } from './pages/Cadastro.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/*<App /> */}
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cadastro' element={<Cadastro />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
