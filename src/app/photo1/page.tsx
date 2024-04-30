"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

const page = () => {
  return (
   

   
    <div className=" flex flex-row justify-center items-center min-h-screen ml-2 ">
    <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900 cursor-pointer p-5">
        <Image

       
          src={`/images/photo1.webp`}
          alt="jordans"
          height="800"
          width="800"
          className="object-contain "
        />
        
       
      </BackgroundGradient>

      <div className=" ml-20 mr-20">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem modi nihil iure, mollitia rerum quam optio provident a, ut voluptatum neque et impedit cupiditate cumque aliquam corporis, incidunt laboriosam aspernatur? Sed nobis ea magni possimus mollitia nostrum consectetur sunt.</p>
        <div>
            <button className=" p-5 m-5 text-black bg-blue-700 rounded-full">
                Buy Now 
            </button>
        </div>
      </div>

     

      </div>
      
    
  )
}

export default page