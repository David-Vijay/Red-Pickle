import ImageGallery from "./ImageGallery"
import './Home.css'
import Desc from "./Desc"

function Home() {
  return (
    <div className="homeContainer">
        <ImageGallery/>
        <Desc/>
    </div>
  )
}

export default Home
