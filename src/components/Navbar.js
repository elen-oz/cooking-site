import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

//styles
import './Navbar.css';

// components
import Searchbar from './Searchbar';

const Navbar = () => {
  const { color, changeColor } = useTheme();

  return (
    <div className='navbar' style={{ background: color }}>
      <nav onClick={() => changeColor('pink')}>
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
