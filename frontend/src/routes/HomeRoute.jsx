import React, { createContext, useContext, useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';
import '../styles/HomeRoute.scss';

// Create a context for managing favourites
const FavouritesContext = createContext();

// Custom hook to access the FavouritesContext
export const useFavourites = () => useContext(FavouritesContext);

const HomeRoute = ({ photos, topics }) => {
  // State to store favourited photo IDs
  const [favourites, setFavourites] = useState([]);
  // State to manage the modal display
  const [displayModal, setDisplayModal] = useState(false);

  // Function to add a photo to favourites
  const addFavourite = (photoId) => {
    setFavourites([...favourites, photoId]);
  };

  // Function to remove a photo from favourites
  const removeFavourite = (photoId) => {
    setFavourites(favourites.filter((id) => id !== photoId));
  };

  // Check if there are favorited photos
  const isFavPhotoExist = favourites.length > 0;

  return (
    <div className="home-route">
      <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
        <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist} />
        {/* Pass setDisplayModal function to PhotoList */}
        <PhotoList photos={photos} setDisplayModal={setDisplayModal} />
        {/* Conditionally render the modal */}
        {displayModal && <PhotoDetailsModal onClose={() => setDisplayModal(false)} />}
      </FavouritesContext.Provider>
    </div>
  );
};

export default HomeRoute;
