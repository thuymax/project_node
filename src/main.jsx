import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RouterCustom from './router.jsx'
import './style/style.scss'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
     <RouterCustom/>
   </BrowserRouter>
)
