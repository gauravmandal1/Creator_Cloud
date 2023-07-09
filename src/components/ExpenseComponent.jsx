import React from "react";
import arrow from "../data/arrow.svg";

const ExpenseComponent = () => {
  return (
    <div class="p-10 border border-gray-300 rounded-lg">
      <div class="flex items-center justify-end">
        <a href="path/to/your/destination" class="inline-block">
          <img src={arrow} class="h-4 w-4" alt="SVG Symbol"></img>
        </a>
      </div>

      <div class="flex">
        <div class="flex items-center justify-end ml-4">
          <div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
        </div>
        <div class="flex items-center ml-4">
          <span>Revenue</span>
        </div>
      </div>

      <div class="flex justify-center">
        <span class="text-3xl">$1,680</span>
        <span className="text-gray-300">.00</span>
      </div>
      <div class="flex">
        <div class="flex items-center justify-end ml-4">
        <div className="w-3 h-3 rounded-full bg-pink-500 mr-2" style={{ backgroundColor: '#53389E' }}></div>

        </div>
        <div class="flex items-center ml-4">
          <span>Expense</span>
        </div>
      </div>

      <div class="flex justify-center">
      <span class="text-3xl">$1,680</span>
        <span className="text-gray-300">.00</span>
        
      </div>
      <div class="flex">
        <div class="flex items-center justify-end ml-4">
        <div className="w-3 h-3 rounded-full bg-pink-500 mr-2" style={{ backgroundColor: '#B692F6' }}></div>
        </div>
        <div class="flex items-center ml-4">
          <span>Net Profit</span>
        </div>
      </div>

      <div class="flex justify-center">
      <span class="text-3xl">$1,6800</span>
        <span className="text-gray-300">.00</span>
      </div>
    </div>
  );
};

export default ExpenseComponent;
