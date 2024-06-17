import React from 'react'
import { itara1, itara2, itara3 } from '../Object/assets'
function Cards() {
  return (
    <>
    <div className='flex item-center ml-20 flex-col gap-12 justify-center mt-8 text-white lg:flex-row'>
    <div className="">
          <div className=" bg-card1  w-60 h-28  ">
            <div className="flex">
              <div className=" pl-5 pt-5">
                <h1>Lamp</h1>
                <p className="font-bold">Best Lamp</p>
              </div>
              <div className="pl-10 pt-6">
                <img style={{height:`150px`,width:`80px`}} src={itara1} alt="" />
              </div>
            </div>
          </div>
        </div>


        <div className="">
          <div className=" bg-card2   w-60 h-28  ">
            <div className="flex">
              <div className="pl-5 pt-5">
                <h1>Lamp</h1>
                <p className="font-bold">Best Lamp</p>
              </div>
              <div className="pl-10">
                <img  style={{height:`80px`,width:`50px`}} src={itara2} alt="" />
              </div>
            </div>
          </div>
        </div>


        <div className="">
          <div className=" bg-card3   w-60 h-28  ">
            <div className="flex">
              <div className="pl-5 pt-5">
                <h1>Lamp</h1>
                <p className="font-bold">Best Lamp</p>
              </div>
              <div className="pl-8 pt-8">
                <img  src={itara3} alt="" style={{height:`60px`,width:`80px`}}/>
              </div>
            </div>
          </div>
        </div>

        </div>
    
    </>
  )
}
export default Cards;