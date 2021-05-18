import React from 'react'
import Image from 'next/image'

function DishItem({ dish }) {
  return (
    <div className="p-2">
      <Image
        layout="responsive"
        width={1920}
        height={1080}
        src={dish.imageURL}
        alt=""
      />
    </div>
  );
}

export default DishItem;
