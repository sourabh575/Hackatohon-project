import { useState } from 'react'
import './CSS/App.css'
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
import Signup from './Signup'
import Signin from './Signin'
import Token from './token'

function App() {
  const isLogin = Token.gettoken() ? true : false
  console.log('isLogin', isLogin)

  return (
    <>
      <Routes>
        <Route path="/" element={<Feature />} />
        <Route path="/signin" element={isLogin ? <Navigate to="/" /> : <Signin />} />
        <Route path="/signup" element={isLogin ? <Navigate to="/" /> : <Signup />} />
        <Route path="/pdf" element={<Pdf />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/c/Articles" element={<Article_C />} />
        <Route path="/javascript/Articles" element={<Article_J />} />
        <Route path="/python/Articles" element={<Article_P />} />

        {/* Conditionally protected routes */}
        <Route path="/note" element={isLogin ? <Notepad /> : <Navigate to="/signin" />} />
        <Route path="/quiz" element={isLogin ? <Quiz /> : <Navigate to="/signin" />} />
        <Route path="/topic" element={isLogin ? <Topic /> : <Navigate to="/signin" />} />
      </Routes>
    </>
  )
}

export default App
