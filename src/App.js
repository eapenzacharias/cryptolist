import { Container } from 'react-bootstrap';
import Home from './components/Home';
import NavBar from './components/NavBar';

const App = () => {
  const UnderCons = () => (
    <>
      <div />
    </>
  );

  return (
    <>
      <Container fluid>
        <NavBar />
        <Home />
        <UnderCons />
      </Container>
    </>
  );
};

export default App;
