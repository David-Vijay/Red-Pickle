import { useEffect, useState } from 'react';
import './Cart.css'
function Cart({ cart, removeBtn }) {
    const [qty, setQty]= useState(0)
    const [total, setTotal] = useState(0)
    const shippingCharge = 30;
    
    useEffect(()=>{
      const productPrice = cart.reduce((acc,curr)=>{
        const currPrice  = curr.quantity === 250? curr.price :
                           curr.quantity === 500? curr.price *2 :
                           curr.quantity === 1000? curr.price * 3: 
                           curr.price
                        return acc + currPrice
      },0);
      
      setTotal(productPrice + shippingCharge)
    },[cart])

    if (cart.length === 0) {
      return (<div className="cartContainer"><h2 className='empty'>Your cart is empty</h2></div>)
    }
    return (
      <>
      <div className="cartContainer">
        <h1>Your Orders</h1>
        {cart.map((item,index)=>(
          <div className="order" key={index}>
              <div className="cartImage" >    
                <img src={item.image} alt="" style={{width:'150px',height:'15 0px'}}/>
              </div>
              {/* <div className='quantity'>
                  <button className='qtybtn'>-</button>
                  <input type="number" className='qtyinput' />
                  <button className='qtybtn'>+</button>
              </div> */}
              <div className="price">
                <div className="priceDetails">
                  <h2 className='pd'>{item.name.toUpperCase()}</h2>
                  <h3 className='pd'>₹{item.quantity==250?item.price:
                                       item.quantity==500? item.price*2:
                                       item.quantity==1000? item.price*3:
                                       item.price
                                        }</h3>
                  <h4 className='pd' style={{fontWeight:'100px'}}>Qunatity:{item.quantity}</h4>
                  <button className='removeBtn' onClick={()=>removeBtn(item.id)}>Remove</button>
                </div>
                  
              </div>
          </div>
        ))}
          <div className="total">
            <h2>Total Amount</h2>
            <hr />
          <div className="cost">
            <div className="ship">
              <p>Product Cost:</p>
              <p className='totalCost'> ₹ {total-shippingCharge}</p>
            </div>
            <div className="totalPrice">
              <label htmlFor="">Shipping Charges:</label>
              <p className='totalCost'> ₹ {shippingCharge}</p>
            </div>
            
          </div>
            <hr />
            <div className="totalPrice">
              <h3>Total</h3>
              <p><b>₹ {total}</b></p>
            </div>
            <div className="checkout">
              <button className='ui-btn'><span>Checkout</span></button>
            </div>
            
        </div>
      </div>
      
      </>
    )
}
  export default Cart