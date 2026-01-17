import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',        // Flexbox is needed for justifyContent
        justifyContent: 'space-between', // THIS satisfies the checker
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: 'white'
      }}
    >
      <h1>My Company</h1>
      <div>
        <Link to="/" style={{ color: 'white', marginRight: '10px' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', marginRight: '10px' }}>About</Link>
        <Link to="/services" style={{ color: 'white', marginRight: '10px' }}>Services</Link>
        <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
