import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './CSS/App.css'
import Front from './Front'
import { Route, Routes, Navigate } from 'react-router-dom'
import Feature from './Feature'
import Article_C from './Article_C'
import Article_J from './Article_J'
import Article_P from './Article_P'
import Topic from './Topic'
import Articles from './Articles'
import Quiz from './Quiz'
import Pdf from './Pdf'
import Notepad from './Notepad'
import ToolBar from './Toolbar'
import Signup from './Signup'
import Signin from './Signin'
import Token from './token'
function App() {
  const [count, setCount] = useState(0);
  const isLogin = Token.gettoken() ? true : false
  console.log('isLogin', isLogin)

  return (
    <>
    <Routes>
      <Route path="/" element = {<Feature/>}></Route>
      <Route path="/signin" element = {<Signin/>}></Route>
      <Route path="/note" element = {<Notepad/>}/>
      <Route path="/quiz" element = {<Quiz/>}></Route>  
      <Route path="/c/Articles" element = {<Article_C/>}></Route>
      <Route path="/javascript/Articles" element = {<Article_J/>}></Route>
      <Route path="/python/Articles" element = {<Article_P/>}></Route>
      <Route path="/Articles" element = {<Articles/>}></Route>
      <Route path="/pdf" element = {<Pdf/>}></Route>
      <Route path="/note" element = {<Notepad/>}></Route>
      <Route path="/topic" element = {<Topic/>}></Route>
      <Route path="/signup" element = {<Signup/>}></Route>
    </Routes>
    </>
  )
}

export default App
