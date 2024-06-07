import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleCloseModal = () => {
    setDisplayModal(false);
  };

  const handleOpenModal = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

  return (
    <div className="App">
      {displayModal && selectedPhoto && (
        <PhotoDetailsModal
          onClose={handleCloseModal}
          photo={selectedPhoto}
          similarPhotos={Object.values(selectedPhoto.similar_photos)}
        />
      )}
      <HomeRoute photos={photos} topics={topics} handleOpenModal={handleOpenModal} />
    </div>
  );
};

export default App;