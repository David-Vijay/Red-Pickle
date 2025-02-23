import './pickles.css'
import {data} from '../Data.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function Pickles({isSearch}) {
    const [query,setQuery] = useState('')
    const [filter,setFilter] = useState('all')
    const handlebtn =(type)=>setFilter(type)
    const filtered = data.filter((item)=>{
        const matchesQuery = query===''?item:item.name.toLowerCase().includes(query.toLowerCase());
        const matchesFilter = filter==='all'?item:item.category===filter;
        return matchesQuery && matchesFilter
       
    })
    const handleInput = (e)=>{
        setQuery(e.target.value)
    }
  return (
    <div className="pickle">
        <div className='input'>
        {isSearch &&(<> <input type="search" placeholder="Search for Pickle" value={query} onChange={handleInput}/></>)}
        </div>
        <div className="plist">
                <div className="filter">
                        <div className="filter-icon"><h2>Filter</h2></div>
                            <ul>
                                <button onClick={()=>handlebtn('all')}>All Pickles</button>
                                <button onClick={()=>handlebtn('veg')}>Veg</button>
                                <button onClick={()=>handlebtn('nonveg')}>Non-Veg</button>
                            </ul>
                        </div>
                <div className="images">
                        {filtered.length>0?filtered.map((pk,id)=>{
                            return <ul key={id}>
                               <Link to={`/pickles/${pk.id}`}>
                            <div>
                                <img src={pk.image} alt="" />
                                </div>
                                </Link>
                            <div className="Picklesprice" style={{display:'flex',justifyContent:'space-between',padding:'5px 10px',backgroundColor:'rgb(208, 223, 226)', width:'80%',alignItems:'center', marginLeft:'10px'}}>
                                <p>{pk.name}</p>
                                <p>₹{pk.price}</p>
                            </div>
                            
                        </ul>
                        }):<h3 style={{color:'GrayText'}}>No Pickles found</h3>}
                </div>
            
        </div>
        
    </div>
  )
}

export default Pickles
