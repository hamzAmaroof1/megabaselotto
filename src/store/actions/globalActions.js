// src/store/actions/globalActions.js

export const globalActions = {
  setWallet: (state, action) => {
    state.wallet = action.payload;
  },
  setLotteries: (state, action) => {
    state.lotteries = action.payload;
  },
  addLottery: (state, action) => {
    state.lotteries.push(action.payload);
  },
  setLottery: (state, action) => {
    state.lottery = action.payload;
  },
  setLuckyNumbers: (state, action) => {
    state.luckyNumbers = action.payload;
  },
  setPurchasedNumbers: (state, action) => {
    state.purchasedNumbers = action.payload;
  },
  setResult: (state, action) => {
    state.result = action.payload;
  },
  setParticipants: (state, action) => {
    state.participants = action.payload;
  },
  setTargetTime: (state, action) => {
    state.targetTime = action.payload;
  },

  // Optional: Action to reset the target time (e.g., when a new lottery starts)
  resetTargetTime: (state) => {
    state.targetTime = null;
  },

  // Action to handle buying MBL with ETH
  buyCurrency: (state, action) => {
    const { eth, mbl } = action.payload;

    if (state.wallet) {
      state.wallet.eth = (state.wallet.eth || 0) - eth;
      state.wallet.mbl = (state.wallet.mbl || 0) + mbl;
    }
  },

  // Action to handle selling MBL for ETH
  sellCurrency: (state, action) => {
    const { eth, mbl } = action.payload;

    if (state.wallet) {
      state.wallet.eth = (state.wallet.eth || 0) + eth;
      state.wallet.mbl = (state.wallet.mbl || 0) - mbl;
    }
  },
};
