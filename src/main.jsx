import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  Home  from './pages/Home';
import  About  from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode >
)
