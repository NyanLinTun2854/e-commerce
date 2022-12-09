import React from 'react'
import MainPage from './components/MainPage'
import { Route, Routes } from 'react-router-dom'
import CLook from './components/CheckOut/CLook'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/category' element={<CLook/>}/>
    </Routes></>
  )
}

export default App