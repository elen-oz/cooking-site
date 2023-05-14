import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

//styles
import './Navbar.css';

// components
import Searchbar from './Searchbar';

const Navbar = () => {
  const { color } = useContext(ThemeContext);

  return (
    <div className='navbar' style={{ background: color }}>
      <nav>
        <Link to='/' className='brand'>
          <h1>Grin and Baste It</h1>
        </Link>
        <Searchbar />
        <Link to='/create'>Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
