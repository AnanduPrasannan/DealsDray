import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import {Route, Routes, BrowserRouter} from 'react-router-dom'


const App = () => {
  return (
   <BrowserRouter>
    <Routes>

    <Route path='/' element={<Register/>}/>
    </Routes>
    <Routes>

    <Route path='/login' element={<Login/>}/>
    </Routes>

    
   </BrowserRouter>
  )
}

export default App