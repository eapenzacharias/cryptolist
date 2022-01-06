/* eslint-disable no-unused-vars */
import {
  Badge,
  Button,
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
    id, symbol, name, supply, maxSupply, marketCapUsd,
  } = props;

  return (
    <tr>
      <th className="col-3">{`${name} - ${symbol}`}</th>
      <td className="col-3">{supply}</td>
      <td className="col-3 align-middle">{maxSupply}</td>
      <td className="col-3 align-middle">{marketCapUsd}</td>
    </tr>
  );
};

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  supply: PropTypes.string.isRequired,
  maxSupply: PropTypes.string,
  marketCapUsd: PropTypes.string.isRequired,
};

Coin.defaultProps = {
  maxSupply: 'Unlimited',
};

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
                <th className="col-3">Mission</th>
                <th className="col-3">Description</th>
                <th className="col-3">Status</th>
                <th className="col-3"> </th>
              </tr>
              {coins.map((coin) => (
                <Coin
                  key={coin.id}
                  id={coin.id}
                  name={coin.name}
                  symbol={coin.symbol}
                  supply={coin.supply}
                  maxSupply={coin.maxSupply}
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
