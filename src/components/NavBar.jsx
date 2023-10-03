import React from "react";

function NavBar() {
  return (
    // Container for the navigation bar with styles
    <div className="pt-1 py-2 bg-white box-border h-14 block border-2 rounded-sm shadow-sm md:w-auto">
      {/* Logo and brand name */}
      <div className="pt-2  ml-8 font-serif text-2xl">
        {/* Logo element with brand name */}
        <span className="bg-red-500 text-white">AL</span>ma<u>Better</u>
        
      </div>
    </div>
  );
}

export default NavBar;
