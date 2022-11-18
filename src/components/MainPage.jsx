import React from "react";
import { useGetFetchDataQuery } from "../store/service/fetchData";
import Nav from "./Nav";
import ProductCard from "./ProductCard";

const MainPage = () => {
  const { isLoading, data, error } = useGetFetchDataQuery("products");

  console.log(data);

  return (
    <>
      <Nav />
      <div className="w-full pt-[80px] font-raleway">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 px-8 gap-x-8 gap-y-4">
          {data?.map((data) => (
            <ProductCard key={data.id} data={data} />
          ))}
          {/* <h1>hd</h1> */}
        </div>
      </div>
    </>
  );
};

export default MainPage;
