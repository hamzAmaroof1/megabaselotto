import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { globalActions } from "../../store/actions/globalActions";
import Countdown from "../../components/Countdown";
import { IoIosCloseCircle } from "react-icons/io";

const LotteryModal = ({ setShowModal, lottery }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const maxQuantity = lottery.quantity;

  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  const handleBuy = () => {
    // dispatch(globalActions.addPurchasedLottery({ ...lottery, quantity }));
    setShowModal(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-gray-800 opacity-50 z-40"
        onClick={handleClose}
      />
      {/* Modal Content */}
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
        onClick={handleClose}
      >
        <div className=" max-w-[300px]  sm:max-w-[500px] md:max-w-[600px] w-full md:p-8 p-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg">
          <div
            className=" flex justify-end cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            <IoIosCloseCircle color="white" size={30} />
          </div>
          <h2 className=" text-[14px] sm:text-2xl font-bold mb-4 text-center text-white uppercase">
            {lottery.title}
          </h2>
          <div className=" flex justify-center">
            <img
              src={lottery.image}
              alt="lottery"
              className="sm:w-20 sm:h-20 flex jc rounded-full sm:mb-4 h-12 w-12 mb-2"
            />
          </div>

          {/* Timer */}
          <Countdown timestamp={lottery.expiresAt} />

          {/* Purchase Section */}
          <div className=" my-4">
            <h3 className="  font-medium text-[12px] sm:text-[16px] text-white uppercase ">
              Purchase Lottery
            </h3>
            <div className="flex items-center mb-2 gap-2">
              <button
                onClick={handleDecrease}
                className="bg-gray-600 text-[16px] font-medium w-[30px] h-[30px] rounded-[4px] text-white"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border-t border-b border-gray-300"
              />
              <button
                onClick={handleIncrease}
                className="bg-gray-600 text-[12px] sm:text-[16px] font-medium w-[30px] h-[30px] rounded-[4px] text-white"
              >
                +
              </button>
            </div>
            <p className=" text-[12px] sm:text-[16px] font-medium text-white ">
              Total Price: {quantity * lottery.ticketPrice} MBL
            </p>
            <p className=" text-[12px] sm:text-[16px] font-medium  text-white ">
              {lottery?.participants || 0} participants
            </p>

            <p className=" text-[12px] sm:text-[16px] font-medium text-white ">
              Remaining Lotteries: {maxQuantity - quantity}
            </p>
          </div>

          <button
            onClick={handleBuy}
            className="bg-blue-900 text-white text-[12px] sm:text-[16px] font-medium  px-4 py-2 rounded"
          >
            Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default LotteryModal;
