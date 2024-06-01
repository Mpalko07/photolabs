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

  const addFavourite = (photoId) => {
    setFavourites([...favourites, photoId]);
  };

  const removeFavourite = (photoId) => {
    setFavourites(favourites.filter((id) => id !== photoId));
  };

  const isFavPhotoExist = favourites.length > 0;

  return (
    <div className="home-route">
      <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
        <TopNavigationBar topics={topics} />
        <PhotoList photos={photos} setDisplayModal={setDisplayModal} />
        {displayModal && (
          <PhotoDetailsModal
            onClose={() => setDisplayModal(false)}
            photo={null}
            similarPhotos={[]}
          />
        )}
      </FavouritesContext.Provider>
    </div>
  );
};

export default HomeRoute;