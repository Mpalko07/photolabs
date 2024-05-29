import React from 'react';
import { useFavourites } from '../routes/HomeRoute';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ username, imageSource, id, location, profile }) => {
  const { favourites, toggleFavourite } = useFavourites();
  const isFavorite = favourites.includes(id);

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
          toggleFavorite={() => toggleFavourite(id)}
        />
      </div>
    </div>
  );
};

export default PhotoListItem;
