import React from 'react';
import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';
import './App.scss';

const App = () => (
  <div className="App">
    {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
    <HomeRoute/>
    <TopNavigationBar/>
    <PhotoList/>
  </div>
);

export default App;
