import React from 'react';
import { useFavourites } from '../routes/HomeRoute';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics }) => {
  const { favourites } = useFavourites();

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {favourites.length > 0 && (
        <div className="top-nav-bar__notification">{favourites.length}</div>
      )}
      <TopicList topics={topics} />
    </div>
  );
};

export default TopNavigationBar;
