import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// styles
import './Searchbar.css';

const Searchbar = () => {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ?q=
    navigate(`/search?q=${term}`);
  };

  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>
          <input
            type='text'
            id='search'
            onChange={(e) => setTerm(e.target.value)}
            required
          />
        </label>
      </form>
    </div>
  );
};

export default Searchbar;
