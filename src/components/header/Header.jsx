import React from "react";

function Header() {
  return (
    <>
      <div className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#333232] relative">
        {new Intl.NumberFormat("en-IN").format("63179.71")}
        <span className="text-sm md:text-lg lg:text-xl text-gray-400 font-medium top-0 ml-2 absolute">
          USD
        </span>
      </div>
      <h1 className="text-green-400 text-lg mt-3">
        +{new Intl.NumberFormat("en-IN").format("2161.42 ")} (3.54%)
      </h1>
    </>
  );
}

export default Header;
