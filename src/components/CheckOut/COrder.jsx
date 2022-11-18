import React from "react";

const COrder = () => {
  return (
    <div className="w-full mb-[70px] font-poppin">
      <div className="w-[60%] mx-auto">
        <h3 className="text-[1.125rem] font-[500] leading-[1.3] pb-[12px] mb-[30px] border-b border-slate-200">
          Billing Details
        </h3>
        <div></div>
        <div className="flex justify-end pt-4">
          <button className="text-[.75rem] text-white font-[600] tracking-[.1125rem] uppercase bg-indigo-500 px-7 py-5 rounded-md hover:bg-indigo-600">
            Submit Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default COrder;
