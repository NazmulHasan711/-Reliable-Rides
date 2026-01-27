import React from 'react'
import './App.css'
import { Route ,Routes, BrowserRouter } from 'react-router-dom'
import NavBar from "./Componet/NavBar"
import Hero from './Componet/Hero'
import Filter from './Componet/Filter'
import MainPage from './Componet/MainPage'
import Error from './Componet/page/Error'
import Login from './Componet/page/Login'



function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}>
        <Route path='' element ={<MainPage/>} />
        <Route path='*' element= {<Error/>}/>
        <Route path='login' element={<Login/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
