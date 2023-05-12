import React from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

// styles
import './Search.css';

// components
import RecipeList from '../../components/RecipeList';

const Search = () => {
  const queryString = useLocation().search;
  // ?q=
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  // this q and above - two different q
  const url = 'http://localhost:3000/recipes?q=' + query;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className='page-title'>Recipes including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Search;
