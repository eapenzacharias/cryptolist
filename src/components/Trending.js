import {
  Container,
  Row,
  Col,
  Table,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getData } from '../redux/coins/coins';

const Coin = (props) => {
  const {
    id, rank, symbol, name, priceUsd, changePercent24Hr, supply, volumeUsd24Hr, marketCapUsd,
  } = props;

  return (
    <tr key={id}>
      <td className="col">{rank}</td>
      <th className="col">{`${name} - ${symbol}`}</th>
      <th className="col">{`$${Number(priceUsd).toFixed(4)}`}</th>
      <th className="col">{`${changePercent24Hr}%`}</th>
      <td className="col align-middle">{`$${Math.floor(marketCapUsd)}`}</td>
      <td className="col align-middle">{`${volumeUsd24Hr}`}</td>
      <td className="col">{supply}</td>
    </tr>
  );
};

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  supply: PropTypes.string.isRequired,
  changePercent24Hr: PropTypes.string.isRequired,
  priceUsd: PropTypes.string.isRequired,
  volumeUsd24Hr: PropTypes.string.isRequired,
  marketCapUsd: PropTypes.string.isRequired,
};

// Coin.defaultProps = {
//   maxSupply: 'Unlimited',
// };

const Trending = () => {
  const coins = useSelector((state) => state.coinReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (coins.length === 0) dispatch(getData());
  }, []);
  return (
    <Container className="missions">
      <Row>
        <Col>
          <Table striped bordered hover vertical-align="middle">
            <tbody>
              <tr>
                <th className="col">#</th>
                <th className="col">Name</th>
                <th className="col">Price</th>
                <th className="col">24h %</th>
                <th className="col">Market Cap</th>
                <th className="col">Volume(24h)</th>
                <th className="col">Circulating Supply</th>
              </tr>
              {coins.map((coin) => (
                <Coin
                  key={coin.id}
                  id={coin.id}
                  rank={coin.rank}
                  name={coin.name}
                  priceUsd={coin.priceUsd}
                  symbol={coin.symbol}
                  supply={coin.supply}
                  volumeUsd24Hr={coin.volumeUsd24Hr}
                  changePercent24Hr={coin.changePercent24Hr}
                  marketCapUsd={coin.marketCapUsd}
                />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Trending;
