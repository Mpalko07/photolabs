// frontend/src/components/HomeRoute.jsx
import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar'; // Import TopNavigationBar component
import PhotoList from '../components/PhotoList'; // Import PhotoList component
import '../styles/HomeRoute.scss'; // Import styles for HomeRoute

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar /> 
      <PhotoList /> 
    </div>
  );
};

export default HomeRoute;
