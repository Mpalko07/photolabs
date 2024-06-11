import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ username, imageSource, id, location, profile, toggleFavorite, isFavorite, openModal }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton isFavorite={isFavorite} toggleFavorite={toggleFavorite} className="fav-badge" />
      <img src={imageSource} alt={`Photo by ${username}`} onClick={openModal} />
      <div className="photo-details">
        <div className="user-info">
          <img src={profile} alt={`Profile picture of ${username}`} className="profile-picture" />
          <div className="user-details">
            <div className="username">{username}</div>
            <div className="location">{location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
