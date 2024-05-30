import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; // Import the PhotoDetailsModal component
import './App.scss';

const App = () => {
  // State to manage the visibility of the modal
  const [displayModal, setDisplayModal] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  return (
    <div className="App">
      {/* Conditionally render the modal */}
      {displayModal && <PhotoDetailsModal onClose={toggleModal} />}
      <HomeRoute photos={photos} topics={topics} toggleModal={toggleModal} /> {/* Pass the toggleModal function to HomeRoute */}
    </div>
  );
};

export default App;
