import React from "react";

const CBillDetail = () => {
  return (
    <div className="w-full mb-[70px]">
      <div className="w-[60%] mx-auto">
        <h3 className="text-[1.125rem] font-[500] leading-[1.3] pb-[12px] mb-[30px] border-b border-slate-200">
          Billing Details
        </h3>
        <div className="w-full flex gap-2 mb-[1rem]">
          <div className="w-[50%]">
            <input
              type="text"
              className="w-full outline-none placeholder:font-poppin placeholder:text-[12px] placeholder:text-[#6f7883] placeholder:tracking-tight border border-slate-200 px-4 py-4"
              placeholder="First Name"
            />
          </div>
          <div className="w-[50%]">
            <input
              type="text"
              className="w-full outline-none placeholder:font-poppin placeholder:text-[12px] placeholder:text-[#6f7883] placeholder:tracking-tight border border-slate-200 px-4 py-4"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="w-full flex mb-[1rem]">
          <input
            type="text"
            className="w-full outline-none placeholder:font-poppin placeholder:text-[12px] placeholder:text-[#6f7883] placeholder:tracking-tight border border-slate-200 px-4 py-4"
            placeholder="Street Address"
          />
        </div>
        <div className="w-full flex mb-[1rem]">
          <input
            type="text"
            className="w-full outline-none placeholder:font-poppin placeholder:text-[12px] placeholder:text-[#6f7883] placeholder:tracking-tight border border-slate-200 px-4 py-4"
            placeholder="Appartment, Suite, Unit, etc."
          />
        </div>
        <div className="w-full flex gap-2 mb-[1rem]">
          <div className="w-[50%]">
            <input
              type="text"
              className="w-full outline-none placeholder:font-poppin placeholder:text-[12px] placeholder:text-[#6f7883] placeholder:tracking-tight border border-slate-200 px-4 py-4"
              placeholder="City"
            />
          </div>
          <div className="w-[50%]">
            <input
              type="text"
              className="w-full outline-none placeholder:font-poppin placeholder:text-[12px] placeholder:text-[#6f7883] placeholder:tracking-tight border border-slate-200 px-4 py-4"
              placeholder="State"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CBillDetail;
