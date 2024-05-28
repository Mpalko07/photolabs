import React, { useState } from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ username, imageSource, id, location, profile }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Function to toggle favorite status
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={`photo-list__item ${isFavorite ? 'favorite' : ''}`}>
      <img src={imageSource} alt={`Photo by ${username}`} />
      <div className="photo-details">
        <img src={profile} alt={`Profile picture of ${username}`} className="profile-picture" />
        <div className="username">{username}</div>
        <div className="location">{location.city}, {location.country}</div>
        <div className="id">ID: {id}</div>
        <PhotoFavButton
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default PhotoListItem;
