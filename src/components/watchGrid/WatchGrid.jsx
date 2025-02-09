import './WatchGrid.css'



export default function WatchGrid() {
 
const watchesArray = [
    { id: 1, src: '/src/assets/watch (1).jpg', alt: 'Watch 1', title: 'Classic Stuning', price: 27999},
    { id: 2, src: '/src/assets/watch (2).jpg', alt: 'Watch 2', title: 'Classic Simple', price:17000 },
    { id: 3, src: '/src/assets/watch (3).jpg', alt: 'Watch 3', title: 'Classic White Interior', price: 16000},
    { id: 4, src: '/src/assets/watch (4).jpg', alt: 'Watch 4', title: 'Classis G3', price: 25000},
    { id: 5, src: '/src/assets/watch (5).jpg', alt: 'Watch 5', title: 'Black&white', price: 18000},
    { id: 6, src: '/src/assets/watch (6).jpg', alt: 'Watch 6', title: 'Watch 6', price: 19000},
    { id: 7, src: '/src/assets/watch (7).jpg', alt: 'Watch 7', title: 'Watch 7', price: 20000},
    { id: 8, src: '/src/assets/watch (8).jpg', alt: 'Watch 8', title: 'Watch 8', price: 21000},
    { id: 9, src: '/src/assets/watch (9).jpg', alt: 'Watch 9', title: 'Watch 9', price:16000 },
    { id: 10, src: '/src/assets/watch (10).jpg', alt: 'Watch 10', title: 'Luxury Diamonds A1', price:249000 },
    { id: 11, src: '/src/assets/watch (11).jpg', alt: 'Watch 11', title: 'Diamonds G7', price:170000 },
    { id: 12, src: '/src/assets/watch (12).jpg', alt: 'Watch 12', title: 'Crystal Queen', price:185000 },
    { id: 13, src: '/src/assets/watch (13).jpg', alt: 'Watch 13', title: 'Rolex F1', price: 36000},
    { id: 14, src: '/src/assets/watch (14).jpg', alt: 'Watch 14', title: 'Luxury Class', price:199999 },
    { id: 15, src: '/src/assets/watch (15).jpg', alt: 'Watch 15', title: 'Bright Desire', price: 159999},
    { id: 16, src: '/src/assets/watch (16).jpg', alt: 'Watch 16', title: 'White Class', price:15000 },
    { id: 17, src: '/src/assets/watch (17).jpg', alt: 'Watch 17', title: 'Diamond with Brown', price:133000 },
    { id: 18, src: '/src/assets/watch (18).jpg', alt: 'Watch 18', title: 'Watch 18', price:190000 },
    { id: 19, src: '/src/assets/watch (19).jpg', alt: 'Watch 19', title: 'Eye Catcher', price: 15000},
    { id: 20, src: '/src/assets/watch (20).jpg', alt: 'Watch 20', title: 'Slim W1', price:14000 },
    { id: 21, src: '/src/assets/watch (21).jpg', alt: 'Watch 21', title: 'Purple Royal', price:22000 },
    { id: 22, src: '/src/assets/watch (22).jpg', alt: 'Watch 22', title: 'Watch 22', price:11000 },
    { id: 23, src: '/src/assets/watch (23).jpg', alt: 'Watch 23', title: 'Watch 23', price:7000 },
    { id: 24, src: '/src/assets/watch (24).jpg', alt: 'Watch 24', title: 'Gradient 24', price:12000 },
    { id: 25, src: '/src/assets/watch (25).jpg', alt: 'Watch 25', title: 'Watch 25', price:12000 },
    { id: 26, src: '/src/assets/watch (26).jpg', alt: 'Watch 26', title: 'Black Lover', price:14000 },
    { id: 27, src: '/src/assets/watch (27).jpg', alt: 'Watch 27', title: 'Watch 27', price:9999},
    { id: 28, src: '/src/assets/watch (28).jpg', alt: 'Watch 28', title: 'Tech G9', price:79000 },
    { id: 29, src: '/src/assets/watch (29).jpg', alt: 'Watch 29', title: 'Royal Class3', price:210000 },
    { id: 30, src: '/src/assets/watch (30).jpg', alt: 'Watch 30', title: 'Diamond Champ', price:110000 },
    { id: 31, src: '/src/assets/watch (31).jpg', alt: 'Watch 31', title: 'Watch 31', price:19999 },
    { id: 32, src: '/src/assets/watch (32).jpg', alt: 'Watch 32', title: 'Watch 32', price:9999 },
    { id: 33, src: '/src/assets/watch (33).jpg', alt: 'Watch 33', title: 'Design Of Brightness', price:16000 }
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