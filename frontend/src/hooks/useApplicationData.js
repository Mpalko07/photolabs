import { useState, useEffect } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const useApplicationData = () => {
  const [state, setState] = useState({
    photos: [],
    topics: [],
    favourites: [],
    selectedPhoto: null,
    displayModal: false,
  });

  useEffect(() => {
    // Load initial data
    setState(prev => ({ ...prev, photos, topics }));
  }, []);

  const updateToFavPhotoIds = (photoId) => {
    setState(prev => ({
      ...prev,
      favourites: prev.favourites.includes(photoId)
        ? prev.favourites.filter(id => id !== photoId)
        : [...prev.favourites, photoId],
    }));
  };

  const setPhotoSelected = (photo) => {
    setState(prev => ({
      ...prev,
      selectedPhoto: photo,
      displayModal: true,
    }));
  };

  const onClosePhotoDetailsModal = () => {
    setState(prev => ({
      ...prev,
      displayModal: false,
      selectedPhoto: null,
    }));
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
