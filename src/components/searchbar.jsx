 import React from "react";


 
 
 function Searchbar(){
      
    return(
    
           
          <div class=" relative  mx-4 ml-12 w-full mt-4  ">
            <div class="drop-shadow rounded flex items-center  bg-white  md:px-3 py-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="12">
                <path fill="none" d="M0 0h24v24H0z">
                </path>
                  <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 
                    9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977
                    6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 
                    3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0
                    0 4.875-1.975l.15-.15z" fill="rgba(142,153,172,1)">
                  </path>
              </svg>
              <input type="text" placeholder="Search by coin" class="w-full focus:outline-none placeholder:font-semibold placeholder:text-gray-1" value="" fdprocessedid="9ijd5"></input>
            </div>
          </div>
       
        
        
);
}

export default Searchbar;

