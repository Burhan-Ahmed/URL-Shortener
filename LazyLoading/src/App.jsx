import Product from './Components/products'
import Home from './Components/home'
import React from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
const AboutPage = React.lazy(() => import('./Components/about'))

export default function App() {

  return (
    <>
      <nav>
        <ul>
          <NavLink to={"/"}>
            <li>
              Home
            </li>
          </NavLink>
          <NavLink to={"/Components/about.jsx"}>
            <li>
              About
            </li>
          </NavLink>
          <NavLink to={"/Components/products.jsx"}>
            <li>
              Product
            </li>
          </NavLink>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Components/about.jsx' element={
          <React.Suspense fallback='Page Loading...'>
            <AboutPage />
          </React.Suspense>
        } />
        <Route path='/Components/products.jsx' element={<Product />} />
      </Routes>
    </>
  )
}


