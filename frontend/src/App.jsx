import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee'
import { useAppContext } from './context/AppContext'


const App = () => {
  const {isLoggedIn }=useAppContext()
  return (
   <BrowserRouter>
    <Routes>
      {isLoggedIn && (   
        <>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreateEmployee/>}/>
        </>
        )}
   
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    
    </Routes>
   
    
   </BrowserRouter>
  )
}

export default App