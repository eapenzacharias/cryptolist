import axios from 'axios';

const GET_DATA = 'cryptolist/coins/GET_DATA';
const TOP_GAINERS = 'cryptolist/coins/TOP_GAINERS';
const TOP_LOSERS = 'cryptolist/coins/TOP_LOSERS';
const TRENDING = 'cryptolist/coins/TRENDING';

const dataUrl = 'https://api.coincap.io/v2/assets';
const initialState = [];

export const getData = () => async (dispatch) => {
  const result = await axios.get(dataUrl);
  const coinData = result.data.data;
  console.log(coinData);
  const fetchedCoins = [];
  coinData.forEach((coin) => {
    const {
      id, rank, symbol, name,
      supply, maxSupply, marketCapUsd,
      volumeUsd24Hr, priceUsd, changePercent24Hr, vwap24Hr,
    } = coin;
    fetchedCoins.push({
      id,
      rank,
      symbol,
      name,
      supply,
      maxSupply,
      marketCapUsd,
      volumeUsd24Hr,
      priceUsd,
      changePercent24Hr,
      vwap24Hr,
    });
  });
  dispatch({
    type: GET_DATA,
    fetchedCoins,
  });
};

export const toggleMission = (payload) => ({
  type: TOP_GAINERS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return [...action.fetchedCoins];
    case TOP_GAINERS:
      return state.map((mission) => (mission.id === action.payload
        ? { ...mission, status: !mission.status }
        : mission));
    case TOP_LOSERS:
      return state.map((mission) => (mission.id === action.payload
        ? { ...mission, status: !mission.status }
        : mission));
    case TRENDING:
      return state.map((mission) => (mission.id === action.payload
        ? { ...mission, status: !mission.status }
        : mission));
    default:
      return state;
  }
};

export default reducer;
