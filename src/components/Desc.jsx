import { Link } from 'react-router-dom'
import {data} from '../Data.js'

import '../components/Desc.css'
function Desc() {
    console.log()
  return (
    <div className="desc">
        <div><h1>Our Specials-----</h1></div>
        <div className="description">
            <p>At PICK PURE PICKLE, we bring you a delightful range of traditional and handcrafted pickles made with love and the finest ingredients. Our pickles are a perfect blend of authentic recipes passed down through generations, combined with modern hygiene standards to ensure the best quality. From tangy mango and spicy lime to exotic mixed vegetable pickles, every jar is a burst of flavor that complements your meals beautifully. Whether you're reliving nostalgic tastes or exploring new flavors, our pickles promise to add a delicious twist to your dining experience. Taste tradition, one bite at a time!</p>
        </div>

        <div className="images">
            {data.map((pk,id)=>{
                return <ul key={id}>
                    <div>
                    <Link to='/pickles'>
                        <img src={pk.image} alt="" /></Link>
                        </div>
                    <div className="Descprice">
                        <p>{pk.name}</p>
                        <p>₹{pk.price}</p>
                    </div>
                    
                </ul>
            })}
        </div>
      
    </div>
  )
}

export default Desc
