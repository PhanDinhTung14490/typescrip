import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Homepage from './page/product'
import ProductPage from './page/homepage'

function App() {
  return (
    <div className="container">
      <header>
        <ul>
          <li><NavLink to="/">Home Page</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </header>
      <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product" element={<ProductPage />}/>
            <Route path="about" element={<h1>About Page</h1>}/>
          </Routes>
      </main>
    </div>
  )
}

export default App

