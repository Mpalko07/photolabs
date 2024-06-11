import React, { createContext, useContext, useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const FavouritesContext = createContext();

export const useFavourites = () => useContext(FavouritesContext);


const HomeRoute = ({ photos, topics, handleOpenModal, favourites, toggleFavourite }) => {
  const [currentPhotos, setCurrentPhotos] = useState(photos);

  const fetchPhotosByTopic = async (topicId) => {
    try {
      const response = await fetch(`http://localhost:8001/api/topics/photos/${topicId}`);
      const data = await response.json();
      setCurrentPhotos(data);
    } catch (error) {
      console.error('Error fetching photos by topic:', error);
    }
  };

  return (
    <div className="home-route">
      <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
        <TopNavigationBar topics={topics} onTopicClick={fetchPhotosByTopic} />
        <PhotoList photos={currentPhotos} handleOpenModal={handleOpenModal} />
      </FavouritesContext.Provider>
    </div>
  );
};

export default HomeRoute;