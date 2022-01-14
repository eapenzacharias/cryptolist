import gainersMock from './__mock__/gainersMock';
import losersMock from './__mock__/losersMock';
import mockAPI from './__mock__/mockAPI';
import trendingMock from './__mock__/trendingMock';

const trending = [
  {
    id: 'bitcoin',
    rank: '1',
    symbol: 'BTC',
    name: 'Bitcoin',
    supply: 18928262.0000000000000000,
    maxSupply: 21000000.0000000000000000,
    marketCapUsd: 807154441704.0174338051504076,
    volumeUsd24Hr: 10,
    priceUsd: 42642.8185379100011298,
    changePercent24Hr: -2.9164470933634717,
  },
  {
    id: 'ethereum',
    rank: '2',
    symbol: 'ETH',
    name: 'Ethereum',
    supply: 119146927.2490000000000000,
    maxSupply: null,
    marketCapUsd: 387569274598.2832041792986546,
    volumeUsd24Hr: 9,
    priceUsd: 3252.8683999405118740,
    changePercent24Hr: -3.5093520065580644,
  },
  {
    id: 'binance-coin',
    rank: '3',
    symbol: 'BNB',
    name: 'BNB',
    supply: 166801148.0000000000000000,
    maxSupply: 66801148.0000000000000000,
    marketCapUsd: 79703395975.4332946998141720,
    volumeUsd24Hr: 8,
    priceUsd: 477.8348166730440890,
    changePercent24Hr: -1.8701234931552126,
  },
];

const gainers = [
  {
    id: 'binance-coin',
    rank: '3',
    symbol: 'BNB',
    name: 'BNB',
    supply: 166801148.0000000000000000,
    maxSupply: 66801148.0000000000000000,
    marketCapUsd: 79703395975.4332946998141720,
    volumeUsd24Hr: 8,
    priceUsd: 477.8348166730440890,
    changePercent24Hr: -1.8701234931552126,
  },
  {
    id: 'bitcoin',
    rank: '1',
    symbol: 'BTC',
    name: 'Bitcoin',
    supply: 18928262.0000000000000000,
    maxSupply: 21000000.0000000000000000,
    marketCapUsd: 807154441704.0174338051504076,
    volumeUsd24Hr: 10,
    priceUsd: 42642.8185379100011298,
    changePercent24Hr: -2.9164470933634717,
  },
  {
    id: 'ethereum',
    rank: '2',
    symbol: 'ETH',
    name: 'Ethereum',
    supply: 119146927.2490000000000000,
    maxSupply: null,
    marketCapUsd: 387569274598.2832041792986546,
    volumeUsd24Hr: 9,
    priceUsd: 3252.8683999405118740,
    changePercent24Hr: -3.5093520065580644,
  },

];

const losers = [
  {
    id: 'ethereum',
    rank: '2',
    symbol: 'ETH',
    name: 'Ethereum',
    supply: 119146927.2490000000000000,
    maxSupply: null,
    marketCapUsd: 387569274598.2832041792986546,
    volumeUsd24Hr: 9,
    priceUsd: 3252.8683999405118740,
    changePercent24Hr: -3.5093520065580644,
  },
  {
    id: 'bitcoin',
    rank: '1',
    symbol: 'BTC',
    name: 'Bitcoin',
    supply: 18928262.0000000000000000,
    maxSupply: 21000000.0000000000000000,
    marketCapUsd: 807154441704.0174338051504076,
    volumeUsd24Hr: 10,
    priceUsd: 42642.8185379100011298,
    changePercent24Hr: -2.9164470933634717,
  },
  {
    id: 'binance-coin',
    rank: '3',
    symbol: 'BNB',
    name: 'BNB',
    supply: 166801148.0000000000000000,
    maxSupply: 66801148.0000000000000000,
    marketCapUsd: 79703395975.4332946998141720,
    volumeUsd24Hr: 8,
    priceUsd: 477.8348166730440890,
    changePercent24Hr: -1.8701234931552126,
  },
];

describe('Three sort functions for Trending, Top Gainers, and Top Losers should work', () => {
  test('Trending should sort the coins in decending order as per volumeUsd24Hr', () => {
    expect(trendingMock(mockAPI)).toStrictEqual(trending);
  });

  test('Top Gainers should sort the coins in decending order as per changePercent24Hr', () => {
    expect(gainersMock(mockAPI)).toStrictEqual(gainers);
  });

  test('Top Losers should sort the coins in accending order as per changePercent24Hr', () => {
    expect(losersMock(mockAPI)).toStrictEqual(losers);
  });
});
