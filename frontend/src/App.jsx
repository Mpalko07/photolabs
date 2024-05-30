import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  // State to manage the visibility of the modal
  const [displayModal, setDisplayModal] = useState(false);
  // State to store details of the selected photo
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Function to toggle the modal visibility
  const handleCloseModal = () => {
    setDisplayModal(false);
  };

  // Function to handle selecting a photo and opening the modal
  const handleOpenModal = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

  return (
    <div className="App">
      {/* Conditionally render the modal */}
      {displayModal && selectedPhoto && (
        <PhotoDetailsModal
          onClose={handleCloseModal}
          photo={selectedPhoto} // Pass the selected photo details to the modal
        />
      )}
      <HomeRoute photos={photos} topics={topics} handleOpenModal={handleOpenModal} />
    </div>
  );
};

export default App;
