import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

// Import your SVG icons
import lightbulbSolidIcon from './assets/icons/lightbulb-solid.svg';
import lightbulbRegularIcon from './assets/icons/lightbulb-regular.svg';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        <img src={isDarkMode ? lightbulbSolidIcon : lightbulbRegularIcon} alt="Lightbulb icon" />
      </button>
      
      {state.displayModal && state.selectedPhoto && (
        <PhotoDetailsModal
          onClose={onClosePhotoDetailsModal}
          photo={state.selectedPhoto}
          similarPhotos={state.photos.filter(p => p.id !== state.selectedPhoto.id)}
          toggleFavourite={updateToFavPhotoIds}
          favourites={state.favourites}
          isFavourite={state.favourites.includes(state.selectedPhoto.id)}
        />
      )}
      <HomeRoute
        photos={state.photos}
        topics={state.topics}
        handleOpenModal={setPhotoSelected}
        favourites={state.favourites}
        toggleFavourite={updateToFavPhotoIds}
      />
    </div>
  );
};

export default App;
