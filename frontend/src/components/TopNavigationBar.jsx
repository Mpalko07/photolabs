import React from 'react';
import { useFavourites } from '../routes/HomeRoute';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';
import '../styles/FavBadge.scss';

const TopNavigationBar = ({ topics, authorName, authorLocation }) => {
  const { favourites } = useFavourites();
  const isFavPhotoExist = favourites.length > 0;

  return (
    <div className="top-nav-bar">
      <div className="top-nav-bar__left">
        <span className="top-nav-bar__logo">PhotoLabs</span>
      </div>
      <div className="top-nav-bar__center">
        <TopicList topics={topics} />
      </div>
      <div className="top-nav-bar__right">
        <FavBadge 
          isFavPhotoExist={isFavPhotoExist}
          authorName={authorName} 
          authorLocation={authorLocation} 
        />
      </div>
    </div>
  );
};

export default TopNavigationBar;