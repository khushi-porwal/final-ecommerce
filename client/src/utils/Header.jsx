import React, { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoSearch, IoBagOutline, IoMenu } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import LocationModal from "../components/LocationModal";
import { LocationContext } from "../context/locationContext";

const Header = () => {
  const { selectedLocation, isOpenModel, openModel } =
    useContext(LocationContext);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="w-full">
      {/* COVID ALERT */}
      <div className="bg-[#233a95] text-center py-2 text-white text-sm font-medium">
        Due to the <b>COVID 19</b> epidemic, orders may be processed with a
        slight delay
      </div>

      {/* Header */}
      <header className="flex flex-col md:flex-row md:justify-between items-center px-4 py-4 shadow-md gap-4 bg-white">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
          <button
            className="md:hidden text-2xl"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <IoMenu />
          </button>
        </div>

        <div className="border rounded-md px-3 py-2 text-sm shadow-sm w-full md:w-auto">
          <p className="text-gray-400">YourLocation</p>
          <button
            onClick={openModel}
            className="text-blue-800 font-semibold flex items-center gap-1"
          >
            {selectedLocation ? selectedLocation.name : "Select a Location"}
            <FaAngleDown />
          </button>
        </div>
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search for products"
            className="bg-transparent flex-1 outline-none text-sm text-gray-700"
          />
          <IoSearch className="text-gray-600" />
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            to="/register"
            className="border rounded-full p-2 text-gray-600"
          >
            <AiOutlineUser />
          </Link>
          <div className="font-bold text-gray-800">$0.00</div>
          <div className="relative">
            <Link to="/cartempty">
              <IoBagOutline className="text-red-800 text-3xl p-1 bg-red-200 rounded-full" />
            </Link>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      </header>

      <nav
        className={`flex-col md:flex-row md:flex items-center justify-around px-4 md:px-6 py-4 gap-4 md:gap-6 transition-all duration-300 ease-in-out ${
          navOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <div className="relative flex justify-center items-center text-white gap-2 bg-sky-400 px-5 py-2 rounded-full cursor-pointer text-sm font-semibold">
          <IoMenu />
          <span className="uppercase">All Categories</span>
          <FaAngleDown />
          <span className="absolute -bottom-3 left-6 text-xs rounded-full shadow bg-gray-100 text-gray-700 px-3 py-0.5">
            Total 63 Products
          </span>
        </div>

        <ul className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm font-semibold text-gray-800">
          <Link
            to="/"
            className="bg-sky-50 text-sky-500 px-4 py-2 rounded-full"
          >
            HOME
          </Link>
          <Link
            to="/category/fruits"
            className="hover:text-sky-500 hover:bg-sky-50 px-4 py-2 rounded-full"
          >
            FRUITS
          </Link>
          <Link
            to="/category/beverages"
            className="hover:text-sky-500 hover:bg-sky-50 px-4 py-2 rounded-full"
          >
            BEVERAGES
          </Link>
          <Link
            to="/category/bakery"
            className="hover:text-sky-500 hover:bg-sky-50 px-4 py-2 rounded-full"
          >
            BAKERY
          </Link>
          <Link
            to="/category/seafood"
            className="hover:text-sky-500 hover:bg-sky-50 px-4 py-2 rounded-full"
          >
            SEA & FOOD
          </Link>
          <Link
            to="/cartempty"
            className="hover:text-sky-500 hover:bg-sky-50 px-4 py-2 rounded-full"
          >
            CART
          </Link>
          <Link
            to="/contact"
            className="hover:text-sky-500 hover:bg-sky-50 px-4 py-2 rounded-full"
          >
            CONTACT
          </Link>
        </ul>
      </nav>

      {isOpenModel && <LocationModal />}
    </div>
  );
};

export default Header;
