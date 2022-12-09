import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { cartAdd, cartRemove } from "../store/reducers/cartSlice";
import { statusChange } from "../store/reducers/productsSlice";
import Star from "./Star";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const status = cartItems.filter((cartItem) => cartItem.id !== data.id);
  const [hla, setHla] = useState(true);

  // if(cartItems?.includes(data)) {

  // }

  const handleClick = (data) => {
    // setHla(false);
    console.log(cartItems);
    console.log(data);
    // dispatch(statusChange(data));
    // console.log(hla);
    if (cartItems?.map((item) => item.id).includes(data?.id)) {
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
            setHla(true);
            dispatch(cartRemove(data));
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
    } else {
      dispatch(cartAdd(data));
    }
  };

  console.log(cartItems);
  return (
    <div className="w-full">
      <div className="w-full min-h-[180px] mx-auto flex justify-start items-center">
        <div className="w-[40%] h-[180px] md:h-[125px]">
          <img src={data.image} className="w-full h-full object-fill" alt="" />
        </div>
      </div>
      <div>
        <h1 className="font-bold pt-2 pb-3 text-black">
          {data.title.slice(0, 20)}
        </h1>
        <p className="text-sm text-[#788487]">
          {data.description.slice(0, 90)}
        </p>
        <div className="flex justify-between items-center text-sm py-4">
          <div className="flex gap-2 text-black">
            <Star stars={data.rating.rate} />
          </div>
          <div className="flex text-black">
            Count: <div className="pl-2">{data.rating.count}</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl text-sky-400 font-bold">${data.price}</h2>
          <button href="#" onClick={() => handleClick(data)}>
            {cartItems?.map((item) => item.id).includes(data.id) ? (
              <div className="text-sm text-sky-400 outline outline-sky-400 rounded-sm px-4 py-2 duration-500 hover:text-white hover:font-bold hover:bg-sky-400 hover:outline-none">
                Added
              </div>
            ) : (
              <div className="text-sm text-white outline outline-white rounded-sm px-4 py-2 bg-sky-400 duration-500">
                Add Cart
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
