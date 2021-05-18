import React from "react";

function HeaderItem({ Icon, title }) {
  return (
    <div className="group w-12 sm:w-20 hover:text-[#ea7c69] h-auto flex flex-col items-center cursor-pointer ">
      <Icon className=" h-8 mb-1 group-hover:animate-bounce " />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;