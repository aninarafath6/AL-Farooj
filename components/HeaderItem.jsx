import React from "react";

function HeaderItem({ Icon, title }) {
  return (
    <div className="group w-12 sm:w-20 hover:text-red h-auto flex flex-col items-center cursor-pointer select-none">
      <Icon className=" h-8 mb-1 group-hover:animate-bounce select-none" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100 select-none">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
