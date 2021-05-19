import React from "react";
import DishItem from "./DishItem";
import FlipMove from "react-flip-move";

function Dishes({ dishes }) {
  return (
    <FlipMove className="px-5 my-10 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 ">
      {dishes.map((dish, i) => (
        <DishItem dish={dish} key={i} />
      ))}
    </FlipMove>
  );
}

export default Dishes;
