import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Button from './components/Button'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Notfound from './pages/Notfound'
import About from './pages/About'
import Props from './pages/Props'
import Card from './components/Card'
import Cardsprops from './pages/Cardsprops'


// import SignUp from './pages/SignUPP'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Home />}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        {/* <Route path='/signupp' element={<SignUp/>}/> */}
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/props' element={<Props/>}/>
        <Route path='/cardsprops' element={<Cardsprops/>}/>
        {/* <Route path='/my-about' element={<About/>}/>
        <Route path='/about' element={<Navigate to='/my-about'/>}/>
        <Route path='*' element={<Notfound/>}/> */}
      </Routes>
      {/* <Button/>
      <Card/>
      <Footer/> */}


      
    </>
  )
}

export default App