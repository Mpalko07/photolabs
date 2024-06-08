import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favourites, setFavourites] = useState([]);

  const handleCloseModal = () => {
    setDisplayModal(false);
    setSelectedPhoto(null);
  };

  const handleOpenModal = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

  const toggleFavourite = (photoId) => {
    setFavourites(favourites.includes(photoId)
      ? favourites.filter(id => id !== photoId)
      : [...favourites, photoId]);
  };

  return (
    <div className="App">
      {displayModal && selectedPhoto && (
        <PhotoDetailsModal
          onClose={handleCloseModal}
          photo={selectedPhoto}
          similarPhotos={Object.values(selectedPhoto.similar_photos)}
          toggleFavourite={toggleFavourite}
          isFavourite={favourites.includes(selectedPhoto.id)}
        />
      )}
      <HomeRoute
        photos={photos}
        topics={topics}
        handleOpenModal={handleOpenModal}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default App;
