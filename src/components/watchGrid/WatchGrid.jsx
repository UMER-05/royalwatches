import './WatchGrid.css'
import watch1 from '/src/assets/watch (1).jpg'
import watch2 from '/src/assets/watch (2).jpg'
import watch3 from '/src/assets/watch (3).jpg'
import watch4 from '/src/assets/watch (4).jpg'
import watch5 from '/src/assets/watch (5).jpg'
import watch6 from '/src/assets/watch (6).jpg'
import watch7 from '/src/assets/watch (7).jpg'
import watch8 from '/src/assets/watch (8).jpg'
import watch9 from '/src/assets/watch (9).jpg'
import watch10 from '/src/assets/watch (10).jpg'
import watch11 from '/src/assets/watch (11).jpg'
import watch12 from '/src/assets/watch (12).jpg'
import watch13 from '/src/assets/watch (13).jpg'
import watch14 from '/src/assets/watch (14).jpg'
import watch15 from '/src/assets/watch (15).jpg'
import watch16 from '/src/assets/watch (16).jpg'
import watch17 from '/src/assets/watch (17).jpg'
import watch18 from '/src/assets/watch (18).jpg'
import watch19 from '/src/assets/watch (19).jpg'
import watch20 from '/src/assets/watch (20).jpg'
import watch21 from '/src/assets/watch (21).jpg'
import watch22 from '/src/assets/watch (22).jpg'
import watch23 from '/src/assets/watch (23).jpg'
import watch24 from '/src/assets/watch (24).jpg'
import watch25 from '/src/assets/watch (25).jpg'
import watch26 from '/src/assets/watch (26).jpg'
import watch27 from '/src/assets/watch (27).jpg'
import watch28 from '/src/assets/watch (28).jpg'
import watch29 from '/src/assets/watch (29).jpg'
import watch30 from '/src/assets/watch (30).jpg'
import watch31 from '/src/assets/watch (31).jpg'
import watch32 from '/src/assets/watch (32).jpg'
import watch33 from '/src/assets/watch (33).jpg'


export default function WatchGrid() {
 
const watchesArray = [
    { id: 1, src: watch1, alt: 'Watch 1', title: 'Classic Stuning', price: 27999},
    { id: 3, src: watch2, alt: 'Watch 3', title: 'Classic White Interior', price: 16000},
    { id: 2, src: watch3, alt: 'Watch 2', title: 'Classic Simple', price:17000 },
    { id: 4, src: watch4, alt: 'Watch 4', title: 'Classis G3', price: 25000},
    { id: 5, src: watch5, alt: 'Watch 5', title: 'Black&white', price: 18000},
    { id: 6, src: watch6, alt: 'Watch 6', title: 'Watch 6', price: 19000},
    { id: 7, src: watch7, alt: 'Watch 7', title: 'Watch 7', price: 20000},
    { id: 8, src: watch8, alt: 'Watch 8', title: 'Watch 8', price: 21000},
    { id: 9, src: watch9, alt: 'Watch 9', title: 'Watch 9', price:16000 },
    { id: 10, src: watch10, alt: 'Watch 10', title: 'Luxury Diamonds A1', price:249000 },
    { id: 11, src: watch11, alt: 'Watch 11', title: 'Diamonds G7', price:170000 },
    { id: 12, src: watch12, alt: 'Watch 12', title: 'Crystal Queen', price:185000 },
    { id: 13, src: watch13, alt: 'Watch 13', title: 'Rolex F1', price: 36000},
    { id: 14, src: watch14, alt: 'Watch 14', title: 'Luxury Class', price:199999 },
    { id: 15, src: watch15, alt: 'Watch 15', title: 'Bright Desire', price: 159999},
    { id: 16, src: watch16, alt: 'Watch 16', title: 'White Class', price:15000 },
    { id: 17, src: watch17, alt: 'Watch 17', title: 'Order Confirmed', price:133000 },
    { id: 18, src: watch18, alt: 'Watch 18', title: 'Watch 18', price:190000 },
    { id: 19, src: watch19, alt: 'Watch 19', title: 'Eye Catcher', price: 15000},
    { id: 20, src: watch20, alt: 'Watch 20', title: 'Slim W1', price:14000 },
    { id: 21, src: watch21, alt: 'Watch 21', title: 'Purple Royal', price:22000 },
    { id: 22, src: watch22, alt: 'Watch 22', title: 'Watch 22', price:11000 },
    { id: 23, src: watch23, alt: 'Watch 23', title: 'Watch 23', price:7000 },
    { id: 24, src: watch24, alt: 'Watch 24', title: 'Gradient 24', price:12000 },
    { id: 25, src: watch25, alt: 'Watch 25', title: 'Watch 25', price:12000 },
    { id: 26, src: watch26, alt: 'Watch 26', title: 'Black Lover', price:14000 },
    { id: 27, src: watch27, alt: 'Watch 27', title: 'Watch 27', price:9999},
    { id: 28, src: watch28, alt: 'Watch 28', title: 'Tech G9', price:79000 },
    { id: 29, src: watch29, alt: 'Watch 29', title: 'Royal Class3', price:210000 },
    { id: 30, src: watch30, alt: 'Watch 30', title: 'Diamond Champ', price:110000 },
    { id: 31, src: watch31, alt: 'Watch 31', title: 'Watch 31', price:19999 },
    { id: 32, src: watch32, alt: 'Watch 32', title: 'Watch 32', price:9999 },
    { id: 33, src: watch33, alt: 'Watch 33', title: 'Design Of Brightness', price:16000 }
];

return(
    <>
  <div className="container">
      <h1>Our Luxurious Watch Collection</h1>
      <div className="grid-container">
        {watchesArray.map((watch) => (
          <div key={watch.id} className="grid-item">
            <img src={watch.src} alt={watch.alt} />
            <div className="item-overlay"> {watch.title}<span className='sale'>10% OFF </span></div>
            <div className='watchPrice'> Price: {watch.price.toLocaleString()}$  <s>{Math.floor(watch.price *1.15).toLocaleString()}$</s>
          <div className='cart-buy-btn-wrapper'>  <div className="cart-btn" data-tooltip={watch.price}>
  <div class="cart-btn-wrapper">
    <div class="text">Add To Cart</div>
    <span class="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-cart2"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
        ></path>
      </svg>
    </span>
  </div>
</div>

<div className="cart-btn" data-tooltip={watch.price}>
  <div class="cart-btn-wrapper">
    <div class="text">Buy Now</div>
    <span class="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-cart2"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
        ></path>
      </svg>
    </span>
  </div>
</div>
            
            </div>
            </div>


      
            
          </div>

          
        ))}  
      </div>
      
    </div>
    </>
 )
}