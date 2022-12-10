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
import { useEffect } from "react";
import { total } from "../store/reducers/cartSlice";
import { cartFilter } from "../store/reducers/productsSlice";
import { addSearchWords } from "../store/reducers/searchSlice";
import { BsCaretDownFill } from "react-icons/bs";

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

  const cartItems = useSelector((state) => state.cart);
  const searchWords = useSelector((state) => state.search.searchWords);

  const [selectedName, setSelectedName] = useState("All Category");

  console.log(searchWords);

  const dispatch = useDispatch();

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

  const handleFilter = (thing) => {
    dispatch(cartFilter(thing));
    setSelectedName(thing);
  };

  // (scrollPosition);

  const state = useSelector((state) => state.count);

  useEffect(() => {
    dispatch(total());
  }, [cartItems]);

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
        <ul className="md:flex hidden justify-between items-stretch w-[45%]  gap-6 uppercase text-[0.75rem] font-[600]">
          <li
            className={classNames(
              scrollPosition > 0 ? "after:bg-black" : "after:bg-black",
              "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:scale-x-[30%] hover:after:scale-x-[1] after:duration-500 pt-7"
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
          <li className="flex items-center py-0">
            <div className="dropdown py-0">
              <label
                tabIndex={0}
                className="btn m-1 text-[0.78rem] bg-white text-black hover:text-white gap-x-2"
              >
                {selectedName}
                <BsCaretDownFill />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a
                    className="text-white"
                    onClick={() => handleFilter("all category")}
                  >
                    All Category
                  </a>
                </li>
                <li>
                  <a
                    className="text-white"
                    onClick={() => handleFilter("men's clothing")}
                  >
                    men's clothing
                  </a>
                </li>
                <li>
                  <a
                    className="text-white"
                    onClick={() => handleFilter("jewelery")}
                  >
                    jewelery
                  </a>
                </li>
                <li>
                  <a
                    className="text-white"
                    onClick={() => handleFilter("electronics")}
                  >
                    electronics
                  </a>
                </li>
                <li>
                  <a
                    className="text-white"
                    onClick={() => handleFilter("women's clothing")}
                  >
                    women's clothing
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="flex items-center w-[40%]">
            <input
              type="text"
              className="w-full outline-none border border-black rounded-lg bg-white py-3 px-3"
              onChange={(e) => dispatch(addSearchWords(e.target.value))}
              placeholder="Type and Search"
            />
          </li>
        </ul>
        <div className="flex w-[20%] justify-end items-center gap-6 pl-6 border-l border-l-lightWhite">
          <div className="text-xl cursor-pointer relative" onClick={handleNav}>
            <AiOutlineShoppingCart />
            <div className="absolute -top-1 -left-1 bg-indigo-500 rounded-full text-[.5rem] leading-[10px] font-[600] w-[80%] h-[80%] flex justify-center items-center">
              {cartItems.cartQuantityTotal}
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
              <div className="flex gap-3 justify-between items-center text-black">
                <AiOutlineShoppingCart />
                <p className="font-bold">Shop Cart</p>
                <div>{cartItems.cartQuantityTotal}</div>
              </div>
              <TiDeleteOutline
                className="text-2xl text-black cursor-pointer"
                onClick={handleNav}
              />
            </div>
            <div className="w-full mt-[40px] mb-[90px] space-y-[50px]">
              {cartItems?.cartItems?.map((card) => (
                <BillCard card={card} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-[200px] lg:w-[400px] fixed bottom-0 shadow-lg z-20 bg-white px-[20px]">
          <div className="flex justify-between items-center py-2 text-black">
            <div className="font-bold">Total</div>
            <div className="font-bold">
              ${cartItems.cartPriceTotal.toFixed(2)}
            </div>
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
