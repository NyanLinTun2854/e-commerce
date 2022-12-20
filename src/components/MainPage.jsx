import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFetchDataQuery } from "../store/service/fetchData";
import Nav from "./Nav";
import { cartFilter } from "../store/reducers/productsSlice";
import ProductCard from "./ProductCard";
import { addSearchWords } from "../store/reducers/searchSlice";
import { BsCaretDownFill } from "react-icons/bs";

const MainPage = () => {
  const { isLoading, data, error } = useGetFetchDataQuery("products");

  const cartItems = useSelector((state) => state.products.itemsFiltered);

  const searchWords = useSelector((state) => state.search.searchWords);

  // const newData = cartItems?.map((item) => ({
  //   ...item,
  //   cartQuantity: 1,
  //   status: false,
  // }));
  const dispatch = useDispatch();
  const [showCat, setShowCat] = useState(false);
  const [selectedName, setSelectedName] = useState("All Category");

  const onShowCatHandler = () => {
    setShowCat((pre) => !pre);
  };

  const handleFilter = (thing) => {
    dispatch(cartFilter(thing));
    setSelectedName(thing);
  };

  console.log(cartItems);

  return (
    <>
      <Nav />
      <div className="w-full min-h-[100vh] pt-[80px] font-raleway bg-white">
        <div className="flex md:hidden justify-between items-center px-2">
          <div className="w-auto">
            <button
              className="relative w-28 md:w-44 py-3 rounded-lg border border-black text-[14px] flex justify-center items-center gap-2"
              onClick={onShowCatHandler}
            >
              All Category
              <BsCaretDownFill />
            </button>
            <div
              className={
                showCat
                  ? "scale-y-1 w-28 sm:w-44 h-auto absolute rounded-lg border border-black bg-white origin-top duration-500"
                  : "scale-y-0 w-28 sm:w-44 h-auto absolute rounded-lg border border-black bg-white origin-top duration-500"
              }
            >
              <div
                className="flex justify-center items-center py-2 cursor-pointer duration-300 hover:bg-slate-200"
                onClick={() => handleFilter("all category")}
              >
                ALL CATEGORY
              </div>
              <div
                className="flex justify-center items-center py-2 cursor-pointer duration-300 hover:bg-slate-200"
                onClick={() => handleFilter("men's clothing")}
              >
                MEN'S CLOTHING
              </div>
              <div
                className="flex justify-center items-center py-2 cursor-pointer duration-300 hover:bg-slate-200"
                onClick={() => handleFilter("jewelery")}
              >
                JEWELERY
              </div>
              <div
                className="flex justify-center items-center py-2 uppercase cursor-pointer duration-300 hover:bg-slate-200"
                onClick={() => handleFilter("electronics")}
              >
                electronics
              </div>
              <div
                className="flex justify-center items-center py-2 uppercase cursor-pointer duration-300 hover:bg-slate-200"
                onClick={() => handleFilter("women's clothing")}
              >
                women's clothing
              </div>
            </div>
          </div>
          <input
            type="text"
            className="w-28 md:w-33 outline-none border border-black rounded-lg bg-white py-3 px-3"
            onChange={(e) => dispatch(addSearchWords(e.target.value))}
            placeholder="Search"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 px-8 gap-x-8 gap-y-4">
          {cartItems
            // ?.map((i) => ({ ...i, selectedNum: 1 }))
            ?.filter((data) =>
              searchWords.toLowerCase() === ""
                ? data
                : data.title.toLowerCase().includes(searchWords)
            )
            ?.map((data) => (
              <ProductCard key={data.id} data={data} />
            ))}
          {/* <h1>hd</h1> */}
        </div>
      </div>
    </>
  );
};

export default MainPage;
