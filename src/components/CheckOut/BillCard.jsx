import { data } from "autoprefixer";
import React, { useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { amount } from "../../store/reducers/firstPrice";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { drop } from "../../store/reducers/productCardSlice";
import { finalAdd } from "../../store/reducers/finalPrice";
// import { addFinal } from "../../store/reducers/firstPrice";

const BillCard = ({ card }) => {
  const firstAmount = useSelector((state) => state.first.value);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [scount, setScount] = useState(2);
  const handlePlus = (card, count, id) => {
    setCount((pre) => pre + 1);
    dispatch(amount(card));
    // console.log(card.price, count);
  };
  const handleMinus = (card, count) => {
    if (count !== 1 && count !== 0) {
      setCount((pre) => pre - 1);
    }
  };

  const updatedPrice = useSelector((state) => state.final.value);

  console.log(updatedPrice);

  const handleDelete = (card, count, firstAmount) => {
    // dispatch(finalAdd({ card: card, count: count, firstAmount: firstAmount }));
    // dispatch(finalAdd({ card: card, count: count, firstAmount: firstAmount }));
    dispatch(drop({ card: card }));
    // console.log("something");
    // console.log(updatedPrice);
    // console.log(updatedPriceArray);
  };

  return (
    <div className="border border-slate-300 rounded-md space-y-2 px-2 py-2 relative">
      <div className="absolute w-[50px] h-[57px] -top-10 left-6 lg:left-10">
        <img src={card.image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="flex justify-between items-center">
        <div className="w-[70%]">{card.title}</div>
        <button
          className="px-1 py-1 rounded-sm duration-300 hover:bg-red-500 hover:text-white"
          onClick={() => handleDelete(card, count, firstAmount)}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
      <div className="flex justify-between">
        <div>${card.price * count}</div>
        <div className="flex justify-between items-center">
          <AiOutlineMinus onClick={handleMinus} />
          <div>{count}</div>
          <AiOutlinePlus onClick={() => handlePlus(card, scount, card.id)} />
        </div>
      </div>
    </div>
  );
};

export default BillCard;
