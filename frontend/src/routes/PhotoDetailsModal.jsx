import React, { useState, useEffect } from 'react';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoListItem from '../components/PhotoListItem';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ onClose, photo, similarPhotos, toggleFavourite, isFavourite }) => {
  const [selectedSimilarPhoto, setSelectedSimilarPhoto] = useState(null);
  const [updatedSimilarPhotos, setUpdatedSimilarPhotos] = useState(similarPhotos);

  useEffect(() => {
    setUpdatedSimilarPhotos(similarPhotos);
  }, [similarPhotos]);

  const handleSimilarPhotoClick = (photo) => {
    setSelectedSimilarPhoto(photo);
  };

  const handleFavouriteIconClick = () => {
    if (photo) {
      toggleFavourite(photo.id);
    }
  };

  const handleToggleFavourite = (photoId) => {
    toggleFavourite(photoId);
    setUpdatedSimilarPhotos(prevPhotos =>
      prevPhotos.map(p => 
        p.id === photoId ? { ...p, isFavorite: !p.isFavorite } : p
      )
    );
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        {photo && (
          <div className="photo-details">
            <img className="photo-details__image" src={photo.urls.full} alt={photo.user.name} />
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
              <PhotoFavButton isFavorite={isFavourite} toggleFavorite={handleFavouriteIconClick} />
            </div>
          </div>
        )}
        <div className="photo-details-modal__similar-section">
          <h2 className="photo-details-modal__header">Similar Photos</h2>
          <ul className="photo-details-modal__images">
            {updatedSimilarPhotos.map((photo) => (
              <li key={photo.id} className="photo-details-modal__image-wrapper">
                <PhotoListItem
                  id={photo.id}
                  username={photo.user.name}
                  imageSource={photo.urls.regular}
                  location={`${photo.location.city}, ${photo.location.country}`}
                  profile={photo.user.profile}
                  toggleFavorite={() => handleToggleFavourite(photo.id)}
                  isFavorite={photo.isFavorite}
                  openModal={() => handleSimilarPhotoClick(photo)}
                />
              </li>
            ))}
          </ul>
        </div>
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
