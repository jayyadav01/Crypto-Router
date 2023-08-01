import React from 'react'
import App from './App'
import Header from './Header'
import Top10 from './Top10'
import Contact from './Contact'
import './Home.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function Home() {
  return (
    <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<App/>}></Route>
                <Route path='/Top-10' element={<Top10/>}></Route>
                <Route path='/Contact' element={<Contact/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Home
