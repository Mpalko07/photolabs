import React, { createContext, useContext, useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';
import '../styles/HomeRoute.scss';

const FavouritesContext = createContext();

export const useFavourites = () => useContext(FavouritesContext);

const HomeRoute = ({ photos, topics }) => {
  const [favourites, setFavourites] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const addFavourite = (photoId) => {
    setFavourites([...favourites, photoId]);
  };

  const removeFavourite = (photoId) => {
    setFavourites(favourites.filter((id) => id !== photoId));
  };

  const toggleFavourite = (photoId) => {
    if (favourites.includes(photoId)) {
      removeFavourite(photoId);
    } else {
      addFavourite(photoId);
    }
  };

  const handleOpenModal = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

  const handleCloseModal = () => {
    setDisplayModal(false);
    setSelectedPhoto(null);
  };

  return (
    <div className="home-route">
      <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
        <TopNavigationBar topics={topics} />
        <PhotoList photos={photos} handleOpenModal={handleOpenModal} />
        {displayModal && selectedPhoto && (
          <PhotoDetailsModal
            photo={selectedPhoto}
            onClose={handleCloseModal}
            similarPhotos={photos.filter(p => p.id !== selectedPhoto.id)}
          />
        )}
      </FavouritesContext.Provider>
    </div>
  );
};

export default HomeRoute;
