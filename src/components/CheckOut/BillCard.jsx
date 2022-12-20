import React, { useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  addQuantity,
  cartRemove,
  decreaseQuantity,
} from "../../store/reducers/cartSlice";

const BillCard = ({ card }) => {
  const dispatch = useDispatch();

  const handlePlus = (card) => {
    dispatch(addQuantity(card));
  };
  const handleMono = (card) => {
    dispatch(decreaseQuantity(card));
  };
  const handleDelete = (card) => {
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
          dispatch(cartRemove(card));
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
  };

  return (
    <div className="border border-slate-300 rounded-md space-y-2 px-2 py-2 relative">
      <div className="absolute max-w-[120px] h-[57px] -top-10 left-6 lg:left-10 mb-4">
        <img src={card.image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="flex justify-between items-center">
        <div className="w-[70%] text-black">{card.title.slice(0, 20)}...</div>
        <button
          className="px-1 py-1 rounded-sm duration-300 hover:bg-red-500 hover:text-white text-black"
          onClick={() => handleDelete(card)}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
      <div className="flex justify-between text-black">
        <div>
          $<span>{(card.price * card.cartQuantity).toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <AiOutlineMinus onClick={() => handleMono(card)} />
          <div>{card.cartQuantity}</div>
          <AiOutlinePlus onClick={() => handlePlus(card)} />
        </div>
      </div>
    </div>
  );
};

export default BillCard;
