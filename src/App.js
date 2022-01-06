import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import TopGainers from './components/TopGainers';
import TopLosers from './components/TopLosers';
import Trending from './components/Trending';

const App = () => {
  const NotMatch = () => (
    <>
      <div>
        No Match Found for the page
      </div>
    </>
  );

  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/gainers" element={<TopGainers />} />
            <Route path="/losers" element={<TopLosers />} />
            <Route path="*" element={<NotMatch />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
