import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import HomePage from './pages/users/homepage'


createRoot(document.getElementById('root')).render(
  <HomePage/>
)
