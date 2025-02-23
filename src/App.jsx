import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Pickles from './components/Pickles'
import { useEffect, useState } from "react"
import Footer from './components/Footer'
import Product from './components/Product'
import Cart from './components/Cart'
import About from './components/About'
import Contact from './components/Contact'

function App() {
    const [isSearch, setIsSearch] = useState(false)
    // const [cart, setCart] = useState([])
    const [cart, setCart] = useState(localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[])
    useEffect(()=>{
      localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])
    const toggle=()=>{
      setIsSearch(!isSearch)
    }
    const cartCount=(product,quantity)=>{
      const updatedCart = {...product, quantity}
      setCart((prev)=>[...prev, updatedCart])
    }
    const removeBtn=(id)=>{
        setCart(cart.filter((c)=>c.id !== id ))
    }
  return (
    <>
    <div className='nav'>
      <Nav toggle={toggle} cart={cart.length}/>
    </div>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pickles' element={<Pickles isSearch={isSearch}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

        <Route path='/pickles/:id' element={<Product cartCount={cartCount} cart={cart} removeBtn={removeBtn}/>}  />
        <Route path='/cart' element={<Cart cart={cart} removeBtn={removeBtn} />}/>
      </Routes>
      <Footer/>
      
    </>
    
  )
  
}

export default App
