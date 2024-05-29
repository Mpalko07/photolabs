import React from 'react';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  return (
    <div className="App">
    {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
    <HomeRoute photos={photos} topics={topics} />
    </div>
  );
};

export default App;
