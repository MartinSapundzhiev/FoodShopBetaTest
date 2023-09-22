import React from "react";
import { FaAngleLeft,FaAngleRight, FaRegRectangleXmark } from "react-icons/fa6";


function Cart({cart,counter,DeleteFun,price,counterUp,counters,CounterDown}) {

  
  


  const uniqueCartItems = Array.from(new Set(cart.map((item) => item.id))).map(
    (id) => cart.find((item) => item.id === id)
  )
    
  return(
    <>
      <div className="flex gap-[220px]">
        <div className="flex justify-center flex-col">
          {uniqueCartItems.map((cartItem, cartIndex) => {
            return (
              <div className="flex ml-[30px] mt-[40px]" key={cartIndex}>
                <div className="w-[400px] h-[100px] bg-zinc-100 drop-shadow-2xl">
                  <div className="flex mt-[0px] ml-[20px]">
                    <img src={cartItem.img} className="w-[70px] h-[70px] object-cover" />
                    <div className="ml-[20px]">
                      <h1 className="font-bold">{cartItem.title}</h1>
                      <p>{cartItem.category}</p>
                      <h3>${cartItem.price}</h3>
                    </div>
                    <div className="mt-[30px] ml-[10px] flex">
                      <FaAngleLeft
                        className="text-2xl hover:text-pink-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                        onClick={() => counterUp(cartItem,cartIndex)} // Pass cartItem as an argument
                      />
                      <h1 className="text-[35px] mt-[-15px] ">{counters[cartIndex]}</h1>
                      <FaAngleRight
                        className="text-2xl hover:text-pink-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                        onClick={() => CounterDown(cartItem,cartIndex)} // Pass cartItem as an argument
                      />
                      <FaRegRectangleXmark
                        className="text-2xl absolute	left-[350px] hover:text-pink-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 max-sm:absolute left-[300px]  "
                        onClick={() => DeleteFun(cartItem.id)[cartIndex]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <button className= "border-[1px] font-bold border-pink-400 text-pink-400 mt-[20px] drop-shadow-2xl px-[10px] hover:bg-pink-500 hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">Order</button>
          <div className=" text-2xl max-xl:absolute left-[200px] bottom-[100px] text-2xl">
          <p>${price.toFixed(2)}</p>
              <h3 className="text-xl font-bold">Items: {counter}</h3>
              </div>
        </div>

        <div className="w-[500px] h-[500px] bg-zinc-100 drop-shadow-xl fixed right-[300px] max-xl:hidden">
          <div className="flex justify-center mt-[30px]">
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">Final Stage</h1>
              <p>${price.toFixed(2)}</p>
              <h3 className="text-xl font-bold">Items: {counter}</h3>
              <div>
                {uniqueCartItems.map((item) => {
                  return (
                    <p key={item.id} className="">{item.title}</p>
                  );
                })}
                 <button className="border-[1px] font-bold border-pink-400 text-pink-400 mt-[20px] drop-shadow-2xl px-[10px] hover:bg-pink-500 hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 w-[120px]">Order</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default Cart;