import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { useScrollPosition } from "../../useScrollPosition";

const Nav = ({ style }) => {
  const NavMenu = [
    "Home",
    "pages",
    "Porfolio",
    "Blog",
    "Shop",
    "Components",
    "Demos",
  ];

  const scrollPosition = useScrollPosition();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  console.log(scrollPosition);
  return (
    <div
      className={classNames(
        scrollPosition > 0
          ? "scale-y-[110%] text-black bg-white shadow-lg"
          : "scale-y-1 text-black bg-white",
        "w-full flex justify-between items-stretch px-6 font-poppin border-b-[1px]  border-b-lightWhite fixed z-10 h-[72px] duration-500 orign-top top-0 mt-0 pt-0"
      )}
    >
      <div className="flex items-center w-[20%]">
        <a href="#" className="text-[1.25rem] font-[600]">
          Boomarag
        </a>
      </div>
      <ul
        className={classNames(
          scrollPosition > 0 ? "pt-7" : "pt-7",
          "flex justify-between items-stretch pt-7 w-[45%]  gap-6 uppercase text-[0.75rem] font-[600]"
        )}
      >
        <li
          className={classNames(
            scrollPosition > 0 ? "after:bg-black" : "after:bg-black",
            "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:scale-x-[30%] hover:after:scale-x-[1] after:duration-500"
          )}
        >
          <NavLink
            to="/"
            className="flex items-center"
            onClick={() => window.scrollTo(0, 0)}
          >
            Home
          </NavLink>
        </li>
        <li
          className={classNames(
            scrollPosition > 0 ? "after:bg-black" : "after:bg-black",
            "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:scale-x-[30%] hover:after:scale-x-[1] after:duration-500"
          )}
        >
          <NavLink
            to="/about"
            className="flex items-center"
            onClick={() => window.scrollTo(0, 0)}
          >
            Pages
          </NavLink>
        </li>
        <li
          className={classNames(
            scrollPosition > 0 ? "after:bg-black" : "after:bg-black",
            "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:scale-x-[30%] hover:after:scale-x-[1] after:duration-500"
          )}
        >
          <NavLink
            to="/portfolio"
            className="flex items-center"
            onClick={() => window.scrollTo(0, 0)}
          >
            Porfolio
          </NavLink>
        </li>
        <li
          className={classNames(
            scrollPosition > 0 ? "after:bg-black" : "after:bg-black",
            "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:scale-x-[30%] hover:after:scale-x-[1] after:duration-500"
          )}
        >
          <NavLink
            to="/blog"
            className="flex items-center"
            onClick={() => window.scrollTo(0, 0)}
          >
            Blog
          </NavLink>
        </li>
        <li
          className={classNames(
            scrollPosition > 0 ? "after:bg-black" : "after:bg-black",
            "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:scale-x-[30%] hover:after:scale-x-[1] after:duration-500"
          )}
        >
          <NavLink
            to="/shop"
            className="flex items-center"
            onClick={() => window.scrollTo(0, 0)}
          >
            Shop
          </NavLink>
        </li>
        <li
          className={classNames(
            scrollPosition > 0 ? "after:bg-black" : "after:bg-black",
            "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:scale-x-[30%] hover:after:scale-x-[1] after:duration-500"
          )}
        >
          <NavLink
            to="/checkout"
            className="flex items-center"
            onClick={() => window.scrollTo(0, 0)}
          >
            CheckOut
          </NavLink>
        </li>
        <li
          className={classNames(
            scrollPosition > 0 ? "after:bg-black" : "after:bg-black",
            "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:scale-x-[30%] hover:after:scale-x-[1] after:duration-500"
          )}
        >
          <NavLink to="" className="flex items-center">
            Demos
          </NavLink>
        </li>
      </ul>
      <div className="flex w-[20%] justify-end items-center gap-6 pl-6 border-l border-l-lightWhite">
        <NavLink
          to="/category"
          className="text-xl cursor-pointer relative"
          onclick={() => window.scrollTo(0, 0)}
        >
          <AiOutlineShoppingCart />
          <div className="absolute -top-1 -left-1 bg-indigo-500 rounded-full text-[.5rem] leading-[10px] font-[600] w-[80%] h-[80%] flex justify-center items-center">
            3
          </div>
        </NavLink>
        <div className="text-xl">
          <HiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default Nav;
