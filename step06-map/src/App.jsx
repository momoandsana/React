import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ex01_Map from './Ex01_Map'
import Ex02_Map from './Ex02_Map'
import Ex03_Map from './Ex03_Map';
import Ex04_MapKeyTest01 from './EX04_MapKeyTest01';
import Ex05_MapkeyTest02 from './Ex05_MapkeyTest02';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ex05_MapkeyTest02/>
    </>
  )
}

export default App
