import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee'


const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/create' element={<CreateEmployee/>}/>
    </Routes>
   
    
   </BrowserRouter>
  )
}

export default App