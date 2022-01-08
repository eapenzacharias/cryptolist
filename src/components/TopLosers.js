import {
  Container,
  Row,
  Col,
  Table,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getData } from '../redux/coins/coins';
import Coin from './Coin';

const TopLosers = () => {
  const coins = useSelector((state) => state.coinReducer);
  const [localState, setLocalState] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (coins.length === 0) dispatch(getData());
    setLocalState(coins);
  }, []);
  localState.sort((a, b) => {
    if (a.changePercent24Hr < b.changePercent24Hr) {
      return -1;
    }
    if (a.changePercent24Hr > b.changePercent24Hr) {
      return 1;
    }
    return 0;
  });
  return (
    <Container>
      <Row>
        <Col className="heading">
          <h1>Top Losers</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover vertical-align="middle">
            <tbody>
              <tr>
                <th className="col d-none d-sm-block">#</th>
                <th className="col">Name</th>
                <th className="col">Price</th>
                <th className="col d-none d-sm-block">24h %</th>
                <th className="col">Details</th>
              </tr>
              {localState.map((coin) => (
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

export default TopLosers;
