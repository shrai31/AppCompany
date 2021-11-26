import React from "react";
import LeftNav from "./LeftNav";
import UpperNav from "./UpperNav";

const Maincomponent=({children}) =>{
  return (
    <div>
      <UpperNav />
      <LeftNav />
      {children}
    </div>
  );
}

export default Maincomponent;
