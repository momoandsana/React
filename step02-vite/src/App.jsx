import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let text="text test"

  return (
    // jsx 문법, div가 아닌 비어 있는 <> 태그도 자주 사용한다
    <>
     <h1> Vite 프로젝트</h1>
     {text}
    </>
  )
}

export default App
