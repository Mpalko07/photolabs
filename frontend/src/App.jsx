import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      {state.displayModal && state.selectedPhoto && (
        <PhotoDetailsModal
          onClose={onClosePhotoDetailsModal}
          photo={state.selectedPhoto}
          similarPhotos={state.photos.filter(p => p.id !== state.selectedPhoto.id)}
          toggleFavourite={updateToFavPhotoIds}
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
