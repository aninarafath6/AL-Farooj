import React from "react";
import Image from "next/image";
import { forwardRef } from "react";


const DishItem = forwardRef(({ dish },ref) => {
  return (
    <div
      ref={ref}
      className=" h-auto group p-2 transition duration-200 transform sm:hover:scale-105 hover:z-50 cursor-pointer"
    >
      <Image
        className="rounded"
        objectFit="cover"
        layout="responsive"
        width={1920}
        height={1080}
        src={dish.strMealThumb}
        alt=""
      />
      <div>
        <p className="italic mt-2">
          ₹ {Math.floor(Math.random() * 100) + 300 }{" "}
          <span className="p-1 mx-2 rounded">{dish.type}</span>
        </p>
        <h2 className="truncate mt-1 text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {dish.strMeal}
        </h2>
        <button
          onClick={() => alert(`${dish.strMeal} added to cart`)}
          type="button"
          className="focus:outline-none hover:bg-primary-dark bg-primary-light py-1 px-2 rounded my-2 outline-none border-none  cursor-pointer text-sm  opacity-0 group-hover:opacity-100"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
});

export default DishItem;
