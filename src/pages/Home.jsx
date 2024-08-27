import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Lotteries from "../components/Lotteries";
import { Helmet } from "react-helmet";
import { monitorWalletConnection } from "../services/blockchain";
import LotteryModal from "./details/LotteryModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLottery, setSelectedLottery] = useState(null);
  const dispatch = useDispatch();
  const lotteries = useSelector((state) => state.globalStates.lotteries);
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      console.log(lotteries);
      monitorWalletConnection();
      effectRan.current = true;
    }

    return () => {
      effectRan.current = true;
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Mega Base Lotto</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Header />
      <Lotteries
        Lotteries={lotteries}
        setShowModal={(lottery) => {
          setSelectedLottery(lottery);
          setShowModal(true);
        }}
      />
      {showModal && selectedLottery && (
        <LotteryModal
          setShowModal={setShowModal}
          lottery={selectedLottery}
          remainingLotteries={10} // Replace with actual remaining lotteries
        />
      )}
    </div>
  );
}
