import { useParams } from "react-router-dom"
import { data } from "../Data.js"
import './Product.css'
import {  useEffect, useState } from "react";

function Product({cartCount, cart, removeBtn}) {
    const [quantity,setQuantity] = useState(250)
    const {id} = useParams();
    const pickle = data.find((item)=>item.id === parseInt(id));
    const [price, setPrice] = useState(pickle.price)
    
    const handleQty=(qty)=>{
      setQuantity(qty)
    }
  useEffect(()=>{
    if(quantity==250){
      setPrice(pickle.price)
    }else if(quantity==500){
      setPrice(pickle.price*2)
    }else{
      setPrice(pickle.price*3)}
    
  },[quantity, pickle.price])
  const inCart =cart.some((item)=>item.id === pickle.id)
  return (
    <div className="product">
        <div className="image"><img src={pickle.image} alt="" style={{width:'400px',height:'400px'}} /></div>
        <div className="details">
            <h2>{pickle.name.toUpperCase()}</h2>
            <h3>₹{price}</h3>
            <div className="buttons">
                <button onClick={()=>handleQty(250)} className={quantity==250? 'active':''}>250gm</button>
                <button onClick={()=>handleQty(1000)} className={quantity==1000? 'active':''}>1Kg</button>
                <button onClick={()=>handleQty(500)} className={quantity==500? 'active':''}>500gm</button>
            </div>
            {inCart?(
              <button className="cartbtn" onClick={()=>removeBtn(pickle.id)} style={{backgroundColor:'tomato'}}>Remove</button>):
              <button className="cartbtn" onClick={()=>cartCount(pickle, quantity)} >Add to Cart</button>
              
              }
            
        </div>
      
    </div>
  )
}

export default Product
