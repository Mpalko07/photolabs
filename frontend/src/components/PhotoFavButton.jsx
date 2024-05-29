import React from 'react';
import FavIcon from './FavIcon'; 
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFavorite, toggleFavorite }) {
  // Function to handle click event
  const handleClick = () => {
    toggleFavorite();
  };

  return (
    <div className={`photo-list__fav-icon ${isFavorite ? 'active' : ''}`} onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon isFavorite={isFavorite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
