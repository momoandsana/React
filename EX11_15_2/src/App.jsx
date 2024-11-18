import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import './components/List.css';
import List from './components/List'

function App() {
  

  return (
    <div className="App">
      <Header/>
      <Editor/>
      <List/>
    </div>
  )
}

export default App
