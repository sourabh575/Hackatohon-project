import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Front from './Front'
import { Route, Routes } from 'react-router-dom'
import Feature from './Feature'
import Article from './Article'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Front/>
    <Routes>
      <Route path="/" element = {<Feature/>}></Route>
      <Route path="/Article" element = {<Article/>}></Route>
    </Routes>
    </>
  )
}

export default App
