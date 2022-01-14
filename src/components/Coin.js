import PropTypes from 'prop-types';
import { useState } from 'react';
import { Badge, Button } from 'react-bootstrap';
import SingleCoin from './SingleCoin';
import '../styles/coins.scss';

const Coin = (props) => {
  const {
    id, rank, symbol, name, priceUsd, changePercent24Hr, supply, volumeUsd24Hr, marketCapUsd,
  } = props;
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <tr key={id}>
        <td className="col d-none d-sm-block">{rank}</td>
        <th className="col">{`${name} - ${symbol}`}</th>
        <th className="col">{`$${priceUsd.toFixed(4)}`}</th>
        <th className="col d-none d-sm-block">
          <Badge
            className={changePercent24Hr >= 0 ? 'bd-success' : 'bd-danger'}
            bg={changePercent24Hr >= 0 ? 'success' : 'danger'}
          >
            {`${changePercent24Hr.toFixed(4)}%`}
          </Badge>
        </th>
        <td className="col align-middle">
          <Button
            onClick={() => setModalShow(true)}
          >
            View Details
          </Button>
        </td>
        <SingleCoin
          key={id}
          id={id}
          symbol={symbol}
          name={name}
          priceUsd={priceUsd}
          supply={supply}
          changePercent24Hr={changePercent24Hr}
          marketCapUsd={marketCapUsd}
          volumeUsd24Hr={volumeUsd24Hr}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </tr>
    </>
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
