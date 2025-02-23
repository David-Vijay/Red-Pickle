
import p4 from '../assets/p4.png'
import './ImageGallery.css'
function ImageGallery() {
  return (
    <div className="card">
        <div className="brandDescription">
            <h1 style={{color:'tomato', fontSize:'3rem', textShadow:'2px 2px 4px rgba(0, 0, 0, 0.7), -2px -2px 4px rgba(0, 0, 0, 0.7)'}} className='text'><i>Red Pickles</i></h1>
            <h1 className='text'>___Andhra Style___ </h1>
            <h4 className='text'>Choose your best</h4>
            

        </div>
        <div className="pickleGallery">
            <img src={p4} alt="" />

        </div>
    </div>
  )
}

export default ImageGallery
