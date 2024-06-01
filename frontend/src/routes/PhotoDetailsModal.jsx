import React, { useState } from 'react';
import closeSymbol from '../assets/closeSymbol.svg';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ onClose, photo, similarPhotos }) => {
  const [selectedSimilarPhoto, setSelectedSimilarPhoto] = useState(null);

  const handleSimilarPhotoClick = (photo) => {
    setSelectedSimilarPhoto(photo);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        {/* Render the main photo */}
        {photo && (
          <img className="photo-details-modal__image" src={photo.url} alt={photo.alt} />
        )}
        {/* Render similar photos */}
        <div className="photo-details-modal__images">
          {similarPhotos.map((photo, index) => (
            <img
              key={index}
              className="photo-details-modal__image"
              src={photo.url}
              alt={photo.alt}
              onClick={() => handleSimilarPhotoClick(photo)}
            />
          ))}
        </div>
        {/* Render selected similar photo */}
        {selectedSimilarPhoto && (
          <div className="photo-details-modal__similar-photo">
            <img
              className="photo-details-modal__image"
              src={selectedSimilarPhoto.url}
              alt={selectedSimilarPhoto.alt}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;