import React from "react";
import { useSelector } from "react-redux";
import SubHeader from "../components/SubHeader";

const Wallet = () => {
  const wallet = useSelector((state) => state.globalStates.wallet);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 pb-16 min-h-screen text-white">
      <SubHeader />
      <div className="container mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-purple-400 py-5">
            Wallet Overview
          </h1>
        </div>
        <div className="text-center">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold">ETH Balance</h2>
            <p className="text-lg">{(wallet?.eth ?? 0).toFixed(2)} ETH</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold">MBL Balance</h2>
            <p className="text-lg">{(wallet?.mbl ?? 0).toFixed(2)} MBL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
