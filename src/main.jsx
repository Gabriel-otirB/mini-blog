// src/index.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// context
import { AuthProvider } from './context/AuthContext';
import CreatePost from './pages/CreatePost/index.jsx';
import Dashboard from './pages/Dashboard/index.jsx';
import { ProtectedRoute, GuestRoute } from './components/ProtectedRoute'; // Importe as rotas protegidas

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />

            <Route 
              path='/login' 
              element={
                <GuestRoute redirectTo="/dashboard">
                  <Login />
                </GuestRoute>
              }
            />
            <Route 
              path='/register' 
              element={
                <GuestRoute redirectTo="/dashboard">
                  <Register />
                </GuestRoute>
              }
            />

            <Route 
              path='/posts/create' 
              element={
                <ProtectedRoute redirectTo="/login">
                  <CreatePost />
                </ProtectedRoute>
              }
            />
            <Route 
              path='/dashboard' 
              element={
                <ProtectedRoute redirectTo="/login">
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)
