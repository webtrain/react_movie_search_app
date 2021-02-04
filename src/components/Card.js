import React from 'react';

const Card = ({ poster_path, title, overview, vote_average, imageUrl }) => {
  

  return (
    <div className='card'>
      <img src={!poster_path ? 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' : imageUrl+poster_path} alt={`${title}-image`} />
      <span className='vote'>{vote_average}</span>
      <div className="movie-details">
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Card;
