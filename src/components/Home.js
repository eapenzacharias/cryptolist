import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/coins/coins';

const Home = () => {
  const coinData = useSelector((state) => state.coinReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (coinData.length === 0) dispatch(getData());
  }, []);

  const UnderConstruction = () => (
    <>
      <Container />
    </>
  );

  return (
    <>
      <Row>
        <Col lg={6} className="main">
          <h1>CryptoList</h1>
          <h2>Over 1000+ Cryptocurrencies</h2>
        </Col>
        <Col lg={6}>
          <Row>
            <Col sm={6} className="lighter sub-home">
              <svg xmlns="http://www.w3.org/2000/svg" width="50%" fill="#83630B" className="bi bi-trophy-fill" viewBox="0 0 16 16">
                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
              </svg>
              <h2 className="display-4">Trending</h2>
            </Col>
            <Col sm={6} className="darker sub-home">
              <svg xmlns="http://www.w3.org/2000/svg" width="50%" fill="#83630B" className="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z" />
              </svg>
              <h2 className="display-4">Top Gainers</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={6} className="darker sub-home">
              <svg xmlns="http://www.w3.org/2000/svg" width="50%" fill="#83630B" className="bi bi-arrow-down-left-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z" />
              </svg>
              <h2 className="display-4">Top Losers</h2>
            </Col>
            <Col sm={6} className="lighter sub-home">
              <svg xmlns="http://www.w3.org/2000/svg" width="50%" fill="#83630B" className="bi bi-archive-fill" viewBox="0 0 16 16">
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
              </svg>
              <h2 className="display-4">All Coins</h2>
            </Col>
          </Row>
        </Col>
      </Row>
      <UnderConstruction />

    </>
  );
};

export default Home;
