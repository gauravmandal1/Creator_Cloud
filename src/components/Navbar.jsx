import avatar from "../data/avatar.jpg";
import logo from "../data/Creator Cloud.svg";
import React, { useEffect } from "react";
import Overview from "../data/overview.svg";
import Finance from "../data/finance.svg";
import Star from "../data/star.svg";
import Downup from "../data/downup.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
// import { BiExpandVertical} from 'react-icons/md';

const NavButton = ({ title, icon }) => (
  <button
    type="button"
    // onClick={() => customFunc()}
    style={{
      backgroundColor: "#444CE7",
      color: "#FFF",
      borderRadius: "8px",
      padding: "10px",
      marginRight: "5px",
      display: "flex",
      alignItems: "center",
    }}
    className="relative text-xl"
  >
    <span className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
    {icon}
    <span style={{ font: "extrabold", marginLeft: "5px" }}>{title}</span>
  </button>
);
const navigation = [
  { title: "Customers", path: "javascript:void(0)" },
  { title: "Careers", path: "javascript:void(0)" },
  { title: "Guides", path: "javascript:void(0)" },
  { title: "Partners", path: "javascript:void(0)" },
];

const Navbar = () => {
  return (
    <>
      {/* <header className="bg-Indigo700 text-white py-4 flex items-center justify-between"> */}
      <header className="bg-indigo-700 text-white py-4 flex items-center justify-between">
        <div className="flex items-center pl-4">
          <img className="w-15 h-15" src={logo} alt="logo" />
        </div>

        <div className="flex justify-center gap-4">
          <NavButton
            title="Overview"
            icon={<img src={Overview} alt="overview" />}
          />
          <NavButton
            title="Finance"
            icon={<img src={Finance} alt="overview" />}
          />
          <NavButton
            title="Operational"
            icon={<img src={Star} alt="overview" />}
          />

          <NavButton
            title="Utilities"
            icon={<img src={Star} alt="overview" />}
          />
        </div>
        <div className="flex items-center">
          <img
            className="rounded-full w-8 h-8"
            src={avatar}
            alt="user-profile"
          />
          <div className="ml-2">
            <p>
              <span className="text-white font-extrabold text-sm">Michael</span>
            </p>
            <p className="text-xs text-white">Personal</p>
          </div>
          <img src={Downup} alt="Logo" className="w-4 h-4 ml-1" />
        </div>
      </header>
      <div>
        {/* <nav className="bg-blue-500 text-white">
          <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
            <div className="flex-1 flex items-center justify-between">
              
              <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
              <form className="flex items-center space-x-2 border rounded-md p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-none text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                    type="text"
                    placeholder="Search"
                  />
                </form>
              </div>
            </div>
          </div>
        </nav> */}
        <nav className="bg-indigo-600 text-white">
          <div className="flex items-center justify-between py-3 px-4 max-w-screen-xl mx-auto md:px-8">
            {/* Button Section */}
            <div className="flex items-center space-x-4">
              <button className="py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium">
                Overview
              </button>
              <button className="py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium">
                Entries
              </button>
              <button className="py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium">
                Invoices
              </button>
              <button className="py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium">
                Invoice
              </button>
              <button className="py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium">
                Payrole
              </button>
              <button className="py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium">
                Splits
              </button>
              <button className="py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium">
                Invoice
              </button>
            </div>

            {/* Search Section */}
            <div className="flex items-center">
              <form className="flex items-center space-x-2 border rounded-md p-2 bg-indigo-700 bg-opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-none text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  className="w-full outline-none appearance-none placeholder-white-500 text-white sm:w-auto bg-transparent"
                  type="text"
                  placeholder="Search"
                />
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
