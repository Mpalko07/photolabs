import { useReducer, useEffect } from 'react';

// Define action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
};

// Reducer function to handle state changes
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
        photos: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload,
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

// Custom hook to manage application data
const useApplicationData = () => {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, {
    photos: [],
    topics: [],
    favourites: [],
    selectedPhoto: null,
    displayModal: false,
  });

  // Effect to fetch photo data from the API
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

  // Effect to fetch topic data from the API
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);

  // Function to update favourite photo IDs
  const updateToFavPhotoIds = (photoId) => {
    if (state.favourites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
    }
  };

  // Function to set selected photo
  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });
  };

  // Function to close photo details modal
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
