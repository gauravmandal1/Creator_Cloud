import React from "react";
import LineChart from "../components/LineChart";
import ExpenseComponent from "../components/ExpenseComponent";
import Customers from "../components/Customers";
import { Button, Card, CardText, CardTitle, Col, Row } from "reactstrap";
import SalesChart from "../components/SalesChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
// import { BiArrowBack } from "react-icons/bi";
import Arrow from "../data/arrow.svg";

// import ProjectTables from "../components/ProjectTable";

export const Dashboard2 = () => {
  return (
    <div className=" pl-20 pr-20">
      <div className="h-4"></div>

      {/* space */}
      <h2
        className="text-4xl text-gray-800 font-extrabold mx-auto md:text-4xl text-left pl-20"
        style={{ fontFamily: "Cabinet Grotesk" }}
      >
        Your account stats{" "}
      </h2>
      <div className="h-4"></div>

      <div className="flex  self-stretch">
        <div className="flex flex-wrap justify-center ">
          {/* First Card */}
          <div className="md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md text-center p-4">
              <FontAwesomeIcon
                icon={faEllipsisH}
                className="absolute top-2 right-2 text-gray-500 cursor-pointer"
              />
              <h5 className="text-lg font-bold mb-4">
                Income
              </h5>
              <p className="text-gray-600">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <div className="mt-4"></div>
            </div>
          </div>

          {/* Second Card */}
          <div className="md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md text-center p-4">
              <h5 className="text-lg font-bold mb-4">
                Special Title Treatment
              </h5>
              <p className="text-gray-600">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <div className="mt-4"></div>
            </div>
          </div>

          {/* Third Card */}
          <div className="md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md text-center p-4">
              <h5 className="text-lg font-bold mb-4">
                Special Title Treatment
              </h5>
              <p className="text-gray-600">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <div className="mt-4"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4"></div>


      <div className="flex justify-center bg-gray-180 self-stretch">
        <div className="w-2/3 rounded shadow-lg">
          {/* <LineChart /> */}
          <SalesChart />
        </div>
        <div className="w-1/3 pr-55">
          <div className="space-y-4 bg-white rounded-lg shadow-md p-4">
            {/* First Component */}
            <div class="flex items-center justify-end">
              <a href="path/to/your/destination" class="inline-block">
                <img src={Arrow} class="h-4 w-4" alt="SVG Symbol"></img>
              </a>
            </div>
            <div className="flex">
              <div className="flex items-center justify-end ml-4">
                <div
                  className="w-3 h-3 rounded-full bg-pink-500 mr-2"
                  style={{ backgroundColor: "#B692F6" }}
                ></div>
              </div>
              <div className="flex items-center ml-4">
                <span>Net Profit</span>
              </div>
            </div>

            <div className="flex justify-center">
              <span className="text-3xl">$1,6800</span>
              <span className="text-gray-300">.00</span>
            </div>

            {/* Second Component (Duplicated) */}
            <div className="flex">
              <div className="flex items-center justify-end ml-4">
                <div
                  className="w-3 h-3 rounded-full bg-pink-500 mr-2"
                  style={{ backgroundColor: "#B692F6" }}
                ></div>
              </div>
              <div className="flex items-center ml-4">
                <span>Net Profit</span>
              </div>
            </div>

            <div className="flex justify-center">
              <span className="text-3xl">$1,6800</span>
              <span className="text-gray-300">.00</span>
            </div>

            {/* Third Component (Duplicated) */}
            <div className="flex">
              <div className="flex items-center justify-end ml-4">
                <div
                  className="w-3 h-3 rounded-full bg-pink-500 mr-2"
                  style={{ backgroundColor: "#B692F6" }}
                ></div>
              </div>
              <div className="flex items-center ml-4">
                <span>Net Profit</span>
              </div>
            </div>

            <div className="flex justify-center">
              <span className="text-3xl">$1,6800</span>
              <span className="text-gray-300">.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4"></div>
      <h2
        className="text-4xl text-gray-800 font-extrabold mx-auto md:text-4xl text-left pl-20"
        style={{ fontFamily: "Cabinet Grotesk" }}
      >
        Your Invoices{" "}
      </h2>
      <div className="mt-4"></div>
      <div>
        <Customers/>
      </div>

    </div>
  );
};
