import React from "react";
import DishItem from "./DishItem";
import FlipMove from "react-flip-move";

function Dishes({ dummyDishes }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {dummyDishes.map((dish, i) => (
        <DishItem dish={dish} key={i} />
      ))}
    </div>
  );
}

export default Dishes;
