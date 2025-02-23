import p4 from '../assets/p4.png'
import './About.css'
function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutCard">
        <div className="aboutImage"><img src={p4} alt="" /></div>
            <div className="aboutSection">
                <div className="one">
                    <p><span style={{fontSize:'1.5rem', fontWeight:'bold'}}>W</span>elcome to Pure Pickles, your ultimate destination for authentic, homemade pickles crafted with love and care! At Pure Pickles, we pride ourselves on delivering the rich, traditional flavors of pickles made from the finest, all-natural ingredients. Each jar is a celebration of heritage.</p>
                </div>
                <div className="two">
                    <h2>Our mission</h2>
                    <p>Our wide range of pickles includes vegetarian and non-vegetarian varieties, catering to every palate and preference. Whether it’s the tangy zest of mango, the fiery spice of chili, or the hearty goodness of mixed vegetables, we’ve got something for everyone. Say goodbye to artificial preservatives and chemicals—at Pure Pickles, we believe in purity, quality, and the joy of savoring authentic flavors.</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default About
