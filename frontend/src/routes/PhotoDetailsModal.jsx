import React, { useState } from 'react';
import closeSymbol from '../assets/closeSymbol.svg';
import FavBadge from '../components/FavBadge';
import PhotoListItem from '../components/PhotoListItem';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ onClose, photo, similarPhotos, toggleFavourite, isFavourite }) => {
  const [selectedSimilarPhoto, setSelectedSimilarPhoto] = useState(null);

  const handleSimilarPhotoClick = (photo) => {
    setSelectedSimilarPhoto(photo);
  };

  const handleFavouriteIconClick = () => {
    if (photo) {
      toggleFavourite(photo.id);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        {/* Render the main photo */}
        {photo && (
          <div className="photo-details">
            <img className="photo-details__image" src={photo.urls.full} alt={photo.user.name} />
            {/* Photographer info */}
            <div className="photo-details__info">
              <div className="photo-details__photographer">
                <img
                  className="photo-details__photographer-profile"
                  src={photo.user.profile}
                  alt={photo.user.username}
                />
                <div className="photo-details__photographer-details">
                  <div className="photo-details__photographer-name">{photo.user.name}</div>
                  <div className="photo-details__photographer-location">
                    {photo.location.city}, {photo.location.country}
                  </div>
                </div>
              </div>
              {/* Connect the FavBadge component to handle the favorite click */}
              <FavBadge isFavPhotoExist={photo.isFavorite} onClick={handleFavouriteIconClick} />
            </div>
          </div>
        )}
        {/* Render similar photos */}
        <div className="photo-details-modal__similar-section">
          <h2 className="photo-details-modal__header">Similar Photos</h2>
          <ul className="photo-details-modal__images">
            {similarPhotos.map((photo) => (
              <li key={photo.id} className="photo-details-modal__image-wrapper">
                <PhotoListItem
                  id={photo.id}
                  username={photo.user.username}
                  imageSource={photo.urls.regular}
                  location={`${photo.location.city}, ${photo.location.country}`}
                  profile={photo.user.profile}
                  onClick={() => handleSimilarPhotoClick(photo)}
                />
              </li>
            ))}
          </ul>
        </div>
        {/* Render selected similar photo */}
        {selectedSimilarPhoto && (
          <div className="photo-details-modal__similar-photo">
            <img
              className="photo-details-modal__image"
              src={selectedSimilarPhoto.urls.full}
              alt={selectedSimilarPhoto.user.username}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
