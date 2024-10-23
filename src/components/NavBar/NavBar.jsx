import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

function NavBar({valor}) {
  return (
    <nav>
      <h1>Pastorius</h1>
      <CartWidget valor={valor} />
    </nav>
  );
}

export default NavBar;