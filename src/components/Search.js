import {
  Container,
  Row,
  Col,
  Table,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from '../redux/coins/coins';
import Coin from './Coin';

const Search = () => {
  const coins = useSelector((state) => state.coinReducer);
  const [localState, setLocalState] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (coins.length === 0) dispatch(getData());
    setLocalState(coins);
  }, []);

  const navigate = useNavigate();
  const filterCoin = (e) => {
    if (e.target.value === '') {
      setLocalState(coins);
    } else {
      setLocalState(
        localState.filter((coin) => {
          const regex = new RegExp(e.target.value, 'gi');
          return coin.symbol.match(regex) || coin.name.match(regex);
        }),
      );
    }
  };
  localState.sort((a, b) => {
    if (a.rank < b.rank) {
      return -1;
    }
    if (a.rank > b.rank) {
      return 1;
    }
    return 0;
  });

  return (
    <Container fluid>
      <div className="searchbar">
        <input
          type="search"
          name="main-search-bar"
          onChange={filterCoin}
          onKeyUp={filterCoin}
          className="main-search-bar-int active"
          placeholder="Search by stock name or company name.."
        />
        <button
          type="button"
          className="hideSearchBtn"
          onClick={(e) => {
            e.preventDefault();
            navigate('trending');
          }}
        >
          x
        </button>
      </div>

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
    </Container>
  );
};

export default Search;
