import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Library} from './components/Library'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Ex01_Export/> */}
    <Library/>

  </StrictMode>,
)
