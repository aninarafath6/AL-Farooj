import requests from "../utils/requests";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex whitespace-nowrap  px-10  sm:px-20 space-x-10 sm:space-x-20 overflow-x-scroll overflow-y-hidden scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }], i) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            key={i}
            className=" text-xl cursor-pointer transform transition ease-in-out duration-100 hover:scale-125 hover:text-white  active:text-red focus:text-red last:pr-28 select-none"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute w-1/12 top-0 right-0  h-10 bg-gradient-to-l from-primary"></div>
    </nav>
  );
}

export default Nav;
