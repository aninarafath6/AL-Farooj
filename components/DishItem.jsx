import React from "react";
import Image from "next/image";

function DishItem({ dish }) {
  return (
    <div className="  group p-2 transition duration-200 transform sm:hover:scale-105 hover:z-50 cursor-pointer">
      <Image
        objectFit="cover"
        layout="responsive"
        width={1920}
        height={1080}
        src={dish.imageURL}
        alt=""
      />
      <div>
        <p className="italic mt-2">
          ₹ {dish.price} <span className="p-1 mx-2 rounded">{dish.type}</span>
        </p>
        <h2 className="text-2xl mt-1 text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {dish.name}
        </h2>
        <button
          onClick={() => alert("item added to cart")}
          type="button"
          className="focus:outline-none hover:bg-primary-dark bg-primary-light py-1 px-2 rounded my-2 outline-none border-none  cursor-pointer text-sm xl:text-lg opacity-0 group-hover:opacity-100"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default DishItem;
