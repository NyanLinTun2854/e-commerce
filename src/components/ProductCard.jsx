import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { click } from "../store/reducers/productCardSlice";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/reducers/totalCountSlice";
import Swal from "sweetalert2";
import { addCart } from "../store/reducers/firstPrice";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.productCard);

  // console.log(state);

  const [hla, setHla] = useState(true);

  const handleClick = (id, data) => {
    dispatch(addCart(data));
    setHla(false);
    // console.log(hla);
    if (hla) {
      dispatch(click({ id: id, data: data }));
      dispatch(add());
    } else {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton:
            "px-4 py-2 bg-green-500 text-white rounded-md ml-4 font-sans",
          cancelButton: "px-4 py-2 bg-red-500 text-white rounded-md",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Your imaginary file is safe :)",
              "error"
            );
          }
        });
    }
  };
  return (
    <div className="w-full">
      <div className="w-full min-h-[180px] mx-auto flex justify-start items-center">
        <div className="w-[40%] h-[180px] md:h-[125px]">
          <img src={data.image} className="w-full h-full object-fill" alt="" />
        </div>
      </div>
      <div>
        <h1 className="font-bold pt-2 pb-3">{data.title.slice(0, 20)}</h1>
        <p className="text-sm text-[#788487]">
          {data.description.slice(0, 90)}
        </p>
        <div className="flex justify-between items-center text-sm py-4">
          <div className="flex gap-2">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className="flex">
            Count: <div className="pl-2">{data.rating.count}</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl text-sky-400 font-bold">${data.price}</h2>
          <button
            href="#"
            className="text-sm text-sky-400 outline outline-sky-400 rounded-sm px-4 py-2 duration-500 hover:text-white hover:font-bold hover:bg-sky-400 hover:outline-none"
            onClick={() => handleClick(data.id, data)}
          >
            {hla ? "Add Cart" : "Added"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
