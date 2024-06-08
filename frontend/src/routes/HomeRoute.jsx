import React, { createContext, useContext, useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';
import '../styles/HomeRoute.scss';

const FavouritesContext = createContext();

export const useFavourites = () => useContext(FavouritesContext);

const HomeRoute = ({ photos, topics, handleOpenModal, favourites, toggleFavourite }) => {
  return (
    <div className="home-route">
      <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
        <TopNavigationBar topics={topics} />
        <PhotoList photos={photos} handleOpenModal={handleOpenModal} />
      </FavouritesContext.Provider>
    </div>
  );
};

export default HomeRoute;
