import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const App = () => {
  // Create an array with length 3
  const photos = new Array(3).fill(null);

  // Render three PhotoListItem components using map
  return (
    <div className="photo-list">
      {photos.map((_, index) => (
        <PhotoListItem
          key={index} // Use index as the key since the data is the same
          username="Joe Example"
          imageSource={`${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`}
          id="1"
          location={{ city: "Montreal", country: "Canada" }}
          profile={`${process.env.PUBLIC_URL}/profile-1.jpg`}
        />
      ))}
    </div>
  );
};

export default App;
