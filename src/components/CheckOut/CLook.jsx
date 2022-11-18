import React from "react";
import CBillDetail from "./CBillDetail";
import CHeader from "./CHeader";
import CNav from "./CNav";
import COrder from "./COrder";

const CLook = () => {
  return (
    <div>
      <CNav />
      <CHeader />
      <CBillDetail />
      <COrder />
    </div>
  );
};

export default CLook;
