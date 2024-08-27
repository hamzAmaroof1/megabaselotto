import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for React Toastify
import SubHeader from "../components/SubHeader";
import { globalActions } from "../store/globalSlices"; // Adjust the path as needed

const Buy = () => {
  const dispatch = useDispatch();
  const [eth, setEth] = useState("");
  const [mbl, setMbl] = useState("");
  const [isBuying, setIsBuying] = useState(true); // State to toggle between Buy and Sell modes

  const handleEthChange = (e) => {
    const ethValue = e.target.value;
    setEth(ethValue);
    setMbl(isBuying ? ethValue * 100 : ethValue / 100);
  };

  const handleMblChange = (e) => {
    const mblValue = e.target.value;
    setMbl(mblValue);
    setEth(isBuying ? mblValue / 100 : mblValue * 100);
  };

  const handleAction = (e) => {
    e.preventDefault();
    const ethValue = parseFloat(eth);
    const mblValue = parseFloat(mbl);

    if (isNaN(ethValue) || isNaN(mblValue) || ethValue <= 0 || mblValue <= 0) {
      toast.error("Both fields must be filled with valid values.");
      return;
    }

    if (isBuying) {
      dispatch(globalActions.buyCurrency({ eth: ethValue, mbl: mblValue }));
      toast.success("Successfully bought MBL!");
    } else {
      dispatch(globalActions.sellCurrency({ eth: ethValue, mbl: mblValue }));
      toast.success("Successfully sold MBL!");
    }

    setEth("");
    setMbl("");
  };

  const toggleMode = () => {
    setIsBuying(!isBuying);
    setEth("");
    setMbl("");
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 pb-16 min-h-screen text-white">
      <SubHeader />
      <div className="container mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-purple-400 py-5">
            {isBuying ? "Buy And Add to Wallet" : "Sell And Check Your Wallet"}
          </h1>
        </div>
        <div className=" flex justify-center">
        <div className="">
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2" htmlFor="mbl">
            {isBuying ? "MBL" : "ETH"}
          </label>
          <input
            type="number"
            id="mbl"
            value={mbl}
            onChange={handleMblChange}
            className="w-full max-w-[300px] p-2 rounded bg-gray-800 text-white"
            placeholder={isBuying ? "Enter amount in MBL" : "Enter amount in ETH"}
            min="1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2" htmlFor="eth">
            {isBuying ? "ETH" : "MBL"}
          </label>
          <input
            type="number"
            id="eth"
            value={eth}
            onChange={handleEthChange}
            className="w-full max-w-[300px] p-2 rounded bg-gray-800 text-white"
            placeholder={isBuying ? "Enter amount in ETH" : "Enter amount in MBL"}
            min="1"
          />
        </div>
        <div className="flex justify-end max-w-[300px] gap-2">
          <button
            onClick={toggleMode}
            className="bg-white text-purple-900 font-bold py-2 px-4 rounded-full"
          >
            {isBuying ? "Switch to Sell" : "Switch to Buy"}
          </button>
          <button
            onClick={handleAction}
            className="bg-white text-purple-900 font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 relative z-10"
          >
            {isBuying ? "Buy" : "Sell"}
          </button>
        </div>
        </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Buy;
