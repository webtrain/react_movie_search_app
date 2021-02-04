import React, { useState, useEffect } from 'react';
import './App.css';
import { popularVideos, images, searchUrl } from './components/config';
import { SearchBar, CardContainer } from './components';

function App() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    getVideos(popularVideos);
    console.log('fetching');
  }, []);

  const getVideos = async (url) => {
    const response = await fetch(url);
    const data = await (response.ok ? response.json() : Promise.resolve([]));
    setVideos(data);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    setSearch(search);
    getVideos(searchUrl + search);
    setSearch('');
  };

  return (
    <div className="app">
      <SearchBar handleSubmit={handleSubmit} updateSearch={updateSearch} value={search} />
      <CardContainer videos={videos.results} imageUrl={images} />
    </div>
  );
}

export default App;
