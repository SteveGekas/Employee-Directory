import React from "react";

const Header = () => {
  return (
    <header>
      <h1 className="text-center">Employee Directory</h1>
      <p className="text-center">
        *Click on the column names to filter by that column or use search to 
        refine your results.*
      </p>
    </header>
  );
};

export default Header;