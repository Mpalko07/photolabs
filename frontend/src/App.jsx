import React from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';

const App = () => (
  <div className="App">
    {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
    <HomeRoute/>
  </div>
);

export default App;
