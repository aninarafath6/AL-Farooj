import React from "react";
import DishItem from "./DishItem";
import FlipMove from "react-flip-move";

function Dishes({ dummyDishes }) {
  return (
    <div className="px-5 my-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {dummyDishes.map((dish, i) => (
        <DishItem dish={dish} key={i} />
      ))}
    </div>
  );
}

export default Dishes;