import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
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
            <Route path="*" element={<NotMatch />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
