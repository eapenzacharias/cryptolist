import PropTypes from 'prop-types';

const Coin = (props) => {
  const {
    id, rank, symbol, name, priceUsd, changePercent24Hr, supply, volumeUsd24Hr, marketCapUsd,
  } = props;

  return (
    <tr key={id}>
      <td className="col">{rank}</td>
      <th className="col">{`${name} - ${symbol}`}</th>
      <th className="col">{`$${priceUsd.toFixed(4)}`}</th>
      <th className="col">{`${changePercent24Hr.toFixed(4)}%`}</th>
      <td className="col align-middle">{`$${Math.floor(marketCapUsd)}`}</td>
      <td className="col align-middle">{`${volumeUsd24Hr}`}</td>
      <td className="col">{supply}</td>
    </tr>
  );
};

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  supply: PropTypes.number.isRequired,
  changePercent24Hr: PropTypes.number.isRequired,
  priceUsd: PropTypes.number.isRequired,
  volumeUsd24Hr: PropTypes.number.isRequired,
  marketCapUsd: PropTypes.number.isRequired,
};

export default Coin;
