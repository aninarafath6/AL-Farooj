import React from "react";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  CalendarIcon,
  ShoppingBagIcon,
  BadgeCheckIcon,
  LoginIcon,
  UserIcon
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="h-auto flex flex-col justify-between m-5 sm:flex-row sm:items-center" >
      <div className="  flex flex-grow justify-evenly max-w-2xl ">
        <HeaderItem Icon={HomeIcon} title="HOME" />
        <HeaderItem Icon={ShoppingBagIcon} title="CART" />
        <HeaderItem Icon={CalendarIcon} title="ORDERS" />
        <HeaderItem Icon={BadgeCheckIcon} title="HOME" />
        <HeaderItem Icon={LoginIcon} title="HOME" />
        <HeaderItem Icon={UserIcon} title="ACCOUNT" />
      </div>
      <h1 className="text-4xl font-bold font-mono text-white mx-auto sm:m-0 ">FAROOJ</h1>
    </header>
  );
}

export default Header;
