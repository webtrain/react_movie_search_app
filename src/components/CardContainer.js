import React from 'react';
import Card from './Card';

const CardContainer = ({ videos, imageUrl }) => {
  console.log('container');
  return (
    <div className="card-container">
      {videos && (
        videos.map(video => (
          <Card key={video.id} {...video} imageUrl={imageUrl}/>
        ))
      )}
    </div>
  );
};

export default CardContainer;
