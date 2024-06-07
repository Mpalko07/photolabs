import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";
import { useFavourites } from '../routes/HomeRoute';

const PhotoList = ({ photos, setDisplayModal, handleOpenModal }) => { 
  const { favourites, toggleFavourite } = useFavourites();

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
            toggleFavorite={() => toggleFavourite(photo.id)}
            isFavorite={favourites.includes(photo.id)}
            setDisplayModal={setDisplayModal}
            openModal={() => handleOpenModal(photo)}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
