import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import ButtonTest from './ButtonTest';
import TripTest from './TripTest';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Ex01_Export/> */}
    {/* <Library/> */}
    
    {/* <ButtonTest/> */}
    <TripTest/>
  </StrictMode>,
)
