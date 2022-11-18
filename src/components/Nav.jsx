import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { useScrollPosition } from "../useScrollPosition";
import { TiDeleteOutline } from "react-icons/ti";
import boomarang from "../img/Boomarng.png";
import one from "../img/one.jpg";
import two from "../img/two.jpg";
import three from "../img/three.jpg";
import four from "../img/four.jpg";
import five from "../img/five.jpg";
import six from "../img/six.jpg";
import seven from "../img/seven.jpg";
import eight from "../img/eight.jpg";
import nine from "../img/nine.jpg";
import { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import BillCard from "./CheckOut/BillCard";

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

  const something = useSelector((state) => state.productCard);

  // (something);

  const scrollPosition = useScrollPosition();

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav((pre) => !pre);
  };

  const handleClose = () => {
    setNav(true);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  // (scrollPosition);

  const state = useSelector((state) => state.count);

  const firstPrice = useSelector((state) => state.first.value);

  return (
    <>
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
            "lg:flex hidden justify-between items-stretch pt-7 w-[45%]  gap-6 uppercase text-[0.75rem] font-[600]"
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
          <div className="text-xl cursor-pointer relative" onClick={handleNav}>
            <AiOutlineShoppingCart />
            <div className="absolute -top-1 -left-1 bg-indigo-500 rounded-full text-[.5rem] leading-[10px] font-[600] w-[80%] h-[80%] flex justify-center items-center">
              {state.value}
            </div>
          </div>
          <div className="text-xl cursor-pointer">
            <HiOutlineMenu />
          </div>
        </div>
      </div>
      <div
        className={classNames(
          nav ? "hidden" : "visible",
          "w-full h-screen bg-white opacity-80 fixed cursor-pointer"
        )}
        onClick={handleClose}
      ></div>
      <div
        className={classNames(
          nav ? "-right-[100%]" : "right-0",
          "w-[200px] lg:w-[400px] h-[100vh] bg-white shadow-xl  fixed top-0 z-50 overflow-auto font-poppin duration-300 origin-right font-raleway"
        )}
      >
        <div className="w-full h-full overflow-hidden">
          <div className="w-full h-full px-[20px] pt-[30px] scrollY overflow-y-scroll">
            <div className="flex justify-between">
              <div className="flex gap-3 justify-between items-center">
                <AiOutlineShoppingCart />
                <p className="font-bold">Shop Cart</p>
                <div>{state.value}</div>
              </div>
              <TiDeleteOutline
                className="text-2xl text-black cursor-pointer"
                onClick={handleNav}
              />
            </div>
            <div className="w-full mt-[40px] mb-[90px] space-y-[50px]">
              {something?.map((card) => (
                <BillCard card={card} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-[200px] lg:w-[400px] fixed bottom-0 shadow-lg z-20 bg-white px-[20px]">
          <div className="flex justify-between items-center py-2">
            <div className="font-bold">Total</div>
            <div className="font-bold">${Math.round(firstPrice)}</div>
          </div>
          <div className="w-full text-center rounded-md text-white bg-sky-400 py-2 mb-2">
            Check Out
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
