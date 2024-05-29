import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";


const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <li key={photo.id}>
          <PhotoListItem
            id={photo.id}
            username={photo.user.username}
            imageSource={photo.urls.regular}
            location={`${photo.location.city}, ${photo.location.country}`}
            profile={photo.user.profile}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
