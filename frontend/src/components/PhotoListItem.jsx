import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ username, imageSource, id, location, profile, handleOpenModal }) => {
  return (
    <div className="photo-list__item">
      <img src={imageSource} alt={`Photo by ${username}`} onClick={() => handleOpenModal({ username, imageSource, id, location, profile })} />
      <div className="photo-details">
        <img src={profile} alt={`Profile picture of ${username}`} className="profile-picture" />
        <div className="username">{username}</div>
        <div className="location">{location}</div>
        <div className="id">ID: {id}</div>
        <PhotoFavButton photoId={id} />
      </div>
    </div>
  );
};

export default PhotoListItem;