import React, { useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
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
    dispatch(cartRemove(card));
  };

  return (
    <div className="border border-slate-300 rounded-md space-y-2 px-2 py-2 relative">
      <div className="absolute w-[50px] h-[57px] -top-10 left-6 lg:left-10">
        <img src={card.image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="flex justify-between items-center">
        <div className="w-[70%] text-black">{card.title}</div>
        <button
          className="px-1 py-1 rounded-sm duration-300 hover:bg-red-500 hover:text-white text-black"
          onClick={() => handleDelete(card)}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
      <div className="flex justify-between text-black">
        <div>
          $<span>{card.price * card.cartQuantity}</span>
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
