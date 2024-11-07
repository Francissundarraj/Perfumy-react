import one from "../Assets/Images/1.jpg"
import two from "../Assets/Images/2.jpg"
import three from "../Assets/Images/3.jpg"

function Products(){
    return (
    <div className="product-container">
       <div className="product-card">
       <img src={one} />
       <p>OG BEAUTY Luxury Eau De Parfum Shadow, 50 Ml</p>
       <p>₹ 499</p>
       <button>ADD TO CART</button>
        </div>
        <div className="product-card">
       <img src={two} />
       <p>OG BEAUTY Luxury Eau De Parfum Gallant, 50 Ml</p>
       <p>₹ 349</p>
       <button>ADD TO CART</button>
        </div>
        <div className="product-card">
       <img src={three} />
       <p>OG BEAUTY Luxury Eau De Parfum Smokey, 50 Ml</p>
       <p>₹ 599</p>
       <button>ADD TO CART</button>
        </div>
    </div>
  )
  }
  
  export default Products