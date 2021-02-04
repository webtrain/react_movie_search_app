import React from 'react'

const SearchBar = ({handleSubmit, updateSearch, value}) => {
  console.log('hello');
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="search" placeholder="Search Movies..." value={value} onChange={updateSearch} />
    </form>
  );
}

export default SearchBar
