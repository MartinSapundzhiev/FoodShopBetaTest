import React from "react";
import { Link } from 'react-router-dom'; 
import { FaBellConcierge, FaSistrix } from "react-icons/fa6";

function Navbar({product,handleSearch,searchQuery,counter,handleAddToCart,}) {
    return(
        <>
       <div className="w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl ml-[50px]">
              Logo
            </h1>
          </div>
          <div className="flex gap-9 mr-[50px]">
            <div className="flex items-center gap-2">
              <input
                type="Search"
                className="bg-gray-200 rounded drop-shadow-xl"
                placeholder="Search"
                value={searchQuery}
                onChange={(e)=>handleSearch(e.target.value)}
              />
            <FaSistrix />
            </div>
            <Link to="/cart">
          <FaBellConcierge className=" hover:text-pink-400 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 max-sm:absolute left-6"/>
        </Link>
          </div>
        </div>
      </div>

      <div className="w-screen h-[150px] bg-transparent">
        
        </div>


        <h1 className="flex gap-14 justify-center text-2xl font-bold mb-[50px] ">Items : {counter}  </h1>

<div className="grid grid-cols-3 gap-4 md:grid-cols-2 max-sm:grid-cols-1">
             {
                product.map((productItem,productIndex)=>{
                    return(
                        <div key={productItem.id} className="bg-zinc-100 drop-shadow-2xl">
                        <div className="w-[200px] h-[150px] my-[20px] flex items-center justify-center gap-6">
                          <img
                            src={productItem.img}
                            className="w-[100px] h-[100px] object-cover ml-[40px]"
                            alt={productItem.title}
                          />
                          <div className="flex flex-col">
                            <h1>{productItem.title}</h1>
                            <p>${productItem.price}</p>
                            <button className="border-[1px] border-pink-500 drop-shadow-2xl px-[30px] my-[20px] hover:bg-pink-500 hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 " onClick={() => handleAddToCart(productItem)}>
                              Buy now
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                })
             }
        </div>
        </>
    );
}
export default Navbar;