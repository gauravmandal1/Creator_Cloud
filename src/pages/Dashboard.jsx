import React, { useState } from "react";
import ExpenseComponent from "../components/ExpenseComponent";
import { useNavigate } from "react-router-dom";
// import Calender from "../components/Calender";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

export const Dashboard = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  
  let navigate = useNavigate(); 
  const handleRedirect = () =>{ 
    let path = `dashboard`; 
    navigate(path);
  }
  return (
    <section>
      <div
        className="max-w-screen-xl mx-auto px-4 py-16 gap-12 text-gray-600 md:px-8 flex-col items-center "
        style={{ width: "840px", height: "400px" }}
      >
        {/* <div className="max-w-screen-xl mx-auto px-4 py-16 gap-12 text-gray-600 md:px-8"> */}
        <div className="space-y-5 max-w-4xl mx-auto text-center">
         
          <h2
            className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl"
            style={{ fontFamily: "Cabinet Grotesk" }}
          >
            Manage your finances 💸{" "}
          </h2>

          <p className="max-w-2xl mx-auto">
            Track, revenue, expenses and split revenue with other members on
            your team. Say goodbye to spreadsheets, say hello to one simple
            interface for all your accounts and revenue streams.
          </p>
        </div>

        <div className="h-4"></div>
        <div className="flex justify-center bg-gray-180  space-x-4 rounded-2xl px-12 py-8 shadow-lg">
        
          
          <div className="w-1/2 text-center">
            <ExpenseComponent />
          </div>
          <div className="w-1/2 text-center">
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
            {/* <DateRange onInit={handleSelect} onChange={handleSelect} /> */}
          </div>
        </div>
        <div className="h-4"></div>
        <button
          className="py-2 px-5 rounded-lg font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline"
          onClick={handleRedirect
            // Add your button click functionality here
          }
        >
          Try it out
        </button>
        <div className="h-4"></div>
      </div>
    </section>
  );
};
