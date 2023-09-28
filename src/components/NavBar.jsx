import React from "react";

function NavBar() {
  return (
    // Container for the navigation bar with styles
    <div class="pt-1 py-2 bg-white box-border block border-2 rounded-sm shadow-sm md:w-auto">
      {/* Logo and brand name */}
      <div class="pt-2 ml-8 font-serif text-2xl">
        {/* Logo element with brand name */}
        <span class="bg-red-500 text-white">AL</span>maBetter
      </div>
    </div>
  );
}

export default NavBar;
