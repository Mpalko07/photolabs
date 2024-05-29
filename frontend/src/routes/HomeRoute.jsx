import React, { createContext, useContext, useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

// Create a context for managing favourites
const FavouritesContext = createContext();

// Custom hook to access the FavouritesContext
export const useFavourites = () => useContext(FavouritesContext);

const HomeRoute = ({ photos, topics }) => {
  // State to store favourited photo IDs
  const [favourites, setFavourites] = useState([]);

  // Function to toggle a photo as favourite
  const toggleFavourite = (photoId) => {
    if (favourites.includes(photoId)) {
      setFavourites(favourites.filter((id) => id !== photoId));
    } else {
      setFavourites([...favourites, photoId]);
    }
  };

  return (
    <div className="home-route">
      <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
        <TopNavigationBar topics={topics} />
        <PhotoList photos={photos} />
      </FavouritesContext.Provider>
    </div>
  );
};

export default HomeRoute;
