{/*Imports Header, Content and Footer from other files */}
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
{/*Imports nav, navbar and container from react bootstrap */}
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
{/*Imports components needed for routing to pages */}
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Create from './components/create';
import Read from './components/read';

function App() {
  return (
    <div>
      <BrowserRouter> {/*//Allows the app to do routing*/}

        <Navbar bg="primary" data-bs-theme="dark"> {/*//Makes the nav bar */}
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>

            <Nav className="me-auto"> {/*//Has the nav links*/}
              <Nav.Link href="/">Home</Nav.Link> 
              <Nav.Link href="/read">Read</Nav.Link> {/*//Links to each page*/}
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes> //Contains the routes for the app
          <Route path="/" element={<Content></Content>} /> {/*//Displays content on home page */}
          <Route path="/read" element={<Read></Read>} /> {/*Displays header on read page */}
          <Route path="/create" element={<Create></Create>} /> {/*Displays content on create page */}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App; //Exports app component
