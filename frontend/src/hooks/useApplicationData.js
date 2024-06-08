import { useReducer, useEffect } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourites: [...state.favourites, action.photoId],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourites: state.favourites.filter((id) => id !== action.photoId),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.photos,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.topics,
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.photo,
        displayModal: true,
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        displayModal: false,
        selectedPhoto: null,
      };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    photos: [],
    topics: [],
    favourites: [],
    selectedPhoto: null,
    displayModal: false,
  });

  useEffect(() => {
    // Load initial data
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos });
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, topics });
  }, []);

  const updateToFavPhotoIds = (photoId) => {
    if (state.favourites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
    }
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
