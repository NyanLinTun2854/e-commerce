import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFetchDataQuery } from "../store/service/fetchData";
import Nav from "./Nav";
import ProductCard from "./ProductCard";

const MainPage = () => {
  const { isLoading, data, error } = useGetFetchDataQuery("products");

  const cartItems = useSelector((state) => state.products.itemsFiltered);

  const searchWords = useSelector((state) => state.search.searchWords);

  // const newData = cartItems?.map((item) => ({
  //   ...item,
  //   cartQuantity: 1,
  //   status: false,
  // }));

  console.log(cartItems);

  return (
    <>
      <Nav />
      <div className="w-full min-h-[100vh] pt-[80px] font-raleway bg-white">
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
