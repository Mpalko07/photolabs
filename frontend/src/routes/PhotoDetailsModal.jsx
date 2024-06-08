import React, { useState } from 'react';
import closeSymbol from '../assets/closeSymbol.svg';
import FavBadge from '../components/FavBadge';
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
            {/* Connect the FavBadge component to handle the favorite click */}
            <FavBadge isFavPhotoExist={photo.isFavorite} onClick={handleFavouriteIconClick} />
          </div>
        )}
        {/* Render similar photos */}
        <div className="photo-details-modal__images">
          {similarPhotos.map((photo) => (
            <img
              key={photo.id}
              className="photo-details-modal__image"
              src={photo.urls.regular}
              alt={photo.user.name}
              onClick={() => handleSimilarPhotoClick(photo)}
            />
          ))}
        </div>
        {/* Render selected similar photo */}
        {selectedSimilarPhoto && (
          <div className="photo-details-modal__similar-photo">
            <img
              className="photo-details-modal__image"
              src={selectedSimilarPhoto.urls.full}
              alt={selectedSimilarPhoto.suer}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
