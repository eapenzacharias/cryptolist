const trendingMock = (coins) => {
  coins.sort((a, b) => {
    if (a.volumeUsd24Hr > b.volumeUsd24Hr) {
      return -1;
    }
    if (a.volumeUsd24Hr < b.volumeUsd24Hr) {
      return 1;
    }
    return 0;
  });
  return coins;
};

export default trendingMock;
