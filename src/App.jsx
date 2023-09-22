import React, { useState } from "react"
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Navbar from "./Component/Navbar";
import Cart from "./Component/Cart";
function App() {
  
  const [product,SetProduct] = useState([
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://images.unsplash.com/photo-1520715293529-bbc0a2793fea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRpbmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://images.unsplash.com/photo-1586985289071-36f62f55ce44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29kemlsbGElMjBtaWxrc2hha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://images.unsplash.com/photo-1496042399014-dc73c4f2bde1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291bnRyeSUyMGRlbGlnaHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://images.unsplash.com/photo-1617054280194-9eb3deda5325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWdnJTIwYXR0YWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hha2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFjb24lMjBvdmVyZmxvd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://images.unsplash.com/photo-1555196301-ace64f260222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYW4lMjBjbGFzc2ljJTIwbHVuY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hha2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [counter,SetCounter] = useState(0);
  const [price,SetPrice] = useState(0);
  const [cart,SetCart] = useState([]);
  const [counters, setCounters] = useState(Array(cart.length).fill(1));

  
  
;
  const handleAddToCart = (data) => {

    const itemInCart = cart.find((item) => item.id === data.id);

    if (!itemInCart){
    SetCart([...cart,data])
    SetPrice(price + data.price);
    SetCounter(counter + 1);
    setCounters([...counters, 1]);
    }
  }

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query) {
      // If the search query is empty, show all items
      SetProduct(product);
    } else {
      // Filter items based on the search query
      const filteredItems = product.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      SetProduct(filteredItems);
    }
  };

   const DeleteFun = (ItemId,data) =>{
    const itemToDelete = cart.find((item) => item.id === ItemId);
    if (itemToDelete) {
      const newPrice = price - itemToDelete.price * counters[cart.indexOf(itemToDelete)];
      SetPrice(newPrice);
  
      const myArray = cart.filter((item) => item.id !== ItemId);
      SetCart(myArray);

      SetCounter(counter -1 )
    }
   }

   
  const CounterUp = (data, index) =>{
    const newCounters = [...counters];
    newCounters[index]++; // Increment the count for the item at the given index
    setCounters(newCounters);

    const newPrice = data.price * newCounters[index];
    SetPrice(newPrice);
  }
  const CounterDown = (data,index) =>{
   
    if (counters[index] > 1) {
      const newCounters = [...counters];
      newCounters[index]--; // Decrement the count for the item at the given index
      setCounters(newCounters);

      const newPrice = data.price * newCounters[index];
      SetPrice(newPrice);
    }
  }

  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Navbar product={product} 
        handleSearch={handleSearch} searchQuery={searchQuery} 
        counter={counter} price={price} handleAddToCart={handleAddToCart}
         />}/>
         <Route path="cart" element={<Cart cart={cart} counter={counter} DeleteFun={DeleteFun}
          price={price} counterUp={CounterUp} CounterDown={CounterDown} counters={counters}/>}/>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
