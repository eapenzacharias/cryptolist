const trendingMock = (coins) => {
  coins.sort((a, b) => {
    if (a.changePercent24Hr < b.changePercent24Hr) {
      return -1;
    }
    if (a.changePercent24Hr > b.changePercent24Hr) {
      return 1;
    }
    return 0;
  });
  return coins;
};

export default trendingMock;
