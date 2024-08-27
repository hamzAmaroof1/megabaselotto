export const globalStates = {
  wallet: "",
  lotteries: [
    {
      id: "1",
      title: "Previous Lottery",
      description: "This lottery is over",
      owner: "0x26fc90ac48ac3aba8547207b83ac611471f5079e",
      prize: 52060,
      ticketPrice: 1000,
      quantity: 40,

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA96DGvTREoPOb7gdmWkG66JHbbVhHJ539Nw&usqp=CAU",
      createdAt: 1659999533651,
      drawsAt: 1655980635722,
      // expiresAt: 1666948528200,
      expiresAt: new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
      participants: 18,
      drawn: false,
    },
    {
      id: "2",
      title: "Current Lottery",
      description: "This lottery is open to buy",
      owner: "0xab72eec5d93be67a8f64fec21d21e70c47245430",
      prize: 46500,
      ticketPrice: 1000,
      quantity: 30,

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA96DGvTREoPOb7gdmWkG66JHbbVhHJ539Nw&usqp=CAU",
      createdAt: 1655331395163,
      drawsAt: 1668827283506,
      // expiresAt: 1653632320833,
      expiresAt: new Date().getTime() + 7 * 24 * 60 * 60 * 1000,

      participants: 66,
      drawn: false,
    },
    {
      id: "3",
      title: "Upcoming Lottery",
      description: "It will be available soon",
      owner: "0x0792c21c0d5d01a0cdf95f4a881086bd461653db",
      prize: 86900,
      ticketPrice: 1000,
      quantity: 60,

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA96DGvTREoPOb7gdmWkG66JHbbVhHJ539Nw&usqp=CAU",
      createdAt: 1654475121072,
      drawsAt: 1643605985667,
      // expiresAt: 1670501098564,
      expiresAt: new Date().getTime() + 7 * 24 * 60 * 60 * 1000,

      participants: 52,
      drawn: false,
    },
    // {
    //   id: "4",
    //   title: "Lottery 4",
    //   description: "This is the 4 lottery",
    //   owner: "0x14bc373115551c334dfc5c380e48bfb63e44f02a",
    //   prize: 34000,
    //   ticketPrice: 1000,
    //   quantity: 50,

    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA96DGvTREoPOb7gdmWkG66JHbbVhHJ539Nw&usqp=CAU",
    //   createdAt: 1642144707927,
    //   drawsAt: 1662293995183,
    //   // expiresAt: 1654930889947,
    //   expiresAt: new Date().getTime() + 7 * 24 * 60 * 60 * 1000,

    //   participants: 31,
    //   drawn: false,
    // },
    // {
    //   id: "5",
    //   title: "Lottery 5",
    //   description: "This is the 5 lottery",
    //   owner: "0x59ea09a181e8ce2a5beabba234d8be46f606cb35",
    //   prize: 20000,
    //   ticketPrice: 1000,
    //   quantity: 50,
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA96DGvTREoPOb7gdmWkG66JHbbVhHJ539Nw&usqp=CAU",
    //   createdAt: 1665347605077,
    //   drawsAt: 1672197127880,
    //   // expiresAt: 1662041176297,
    //   expiresAt: new Date().getTime() + 7 * 24 * 60 * 60 * 1000,

    //   participants: 61,
    //   drawn: false,
    // },
  ],

  lottery: null,
  result: null,
  luckyNumbers: [],
  purchasedNumbers: [],
  participants: [],
  targetTime: null,
  totalLotteries: {},
};
