/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import {
  Badge, Button, Col, Container, Modal, Row,
} from 'react-bootstrap';
import '../styles/model.scss';

const imgURL = 'https://cryptoicons.org/api/icon/';

const SingleCoin = (props) => {
  const {
    id, symbol, name,
    priceUsd, changePercent24Hr, supply,
    volumeUsd24Hr, marketCapUsd, onHide,
  } = props;

  return (
    <>
      <Modal
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={`popup ${changePercent24Hr >= 0 ? 'rising' : 'falling'}`}
      >
        <Modal.Header
          closeButton
          className={`${changePercent24Hr >= 0 ? 'rising' : 'falling'}`}
        >
          <Container>
            <Row>
              <Col xs="3">
                <img src={`${imgURL}${symbol.toLowerCase()}/50`} alt={symbol} />
              </Col>
              <Col>
                <h2>{`${name} - ${symbol}`}</h2>
              </Col>
              <Col>
                <h3>{`$${priceUsd.toFixed(4)}`}</h3>
              </Col>
            </Row>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <h3>Percentage Change 24H</h3>
                <h3 className={`${changePercent24Hr >= 0 ? 'headrising' : 'headfalling'}`}>
                  {`${changePercent24Hr.toFixed(4)}%`}
                </h3>
              </Col>
              <Col>
                <h3>Current Market Cap $</h3>
                <h3>
                  {`$${Math.floor(marketCapUsd)}`}
                </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Current Supply</h3>
                <h3>
                  {supply}
                </h3>
              </Col>
              <Col>
                <h3>Trade Volume 24H</h3>
                <h3>
                  {`$${volumeUsd24Hr.toFixed(0)}`}
                </h3>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

SingleCoin.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  supply: PropTypes.number.isRequired,
  changePercent24Hr: PropTypes.number.isRequired,
  priceUsd: PropTypes.number.isRequired,
  volumeUsd24Hr: PropTypes.number.isRequired,
  marketCapUsd: PropTypes.number.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default SingleCoin;
