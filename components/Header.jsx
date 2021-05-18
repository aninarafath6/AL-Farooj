import HeaderItem from "./HeaderItem";
import Link from "next/link";

import {
  HomeIcon,
  CalendarIcon,
  ShoppingBagIcon,
  BadgeCheckIcon,
  LogoutIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="h-auto flex flex-col justify-between m-5 sm:flex-row sm:items-center">
      <div className="  flex flex-grow justify-evenly max-w-2xl ">
        <HeaderItem Icon={HomeIcon} title="HOME" />
        <HeaderItem Icon={ShoppingBagIcon} title="CART" />
        <HeaderItem Icon={CalendarIcon} title="ORDERS" />
        <HeaderItem Icon={BadgeCheckIcon} title="OFFERS" />
        <HeaderItem Icon={LogoutIcon} title="LOGOUT" />
        <HeaderItem Icon={UserIcon} title="ACCOUNT" />
      </div>
      <Link href="/" className="">
        <a className=" text-4xl font-bold font-mono text-white mx-auto sm:m-0  my-1 select-none">
          FAROOJ
        </a>
      </Link>
    </header>
  );
}

export default Header;
