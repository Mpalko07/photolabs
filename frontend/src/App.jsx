import React from 'react';

 import PhotoListItem from './components/PhotoListItem';
 import PhotoList from './components/PhotoList';
 import './App.scss';

 const App = () => {
  const sampleDataForPhotoListItem = {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  };

  return (
    <div className="App">
      <PhotoListItem
        username={sampleDataForPhotoListItem.username}
        imageSource={sampleDataForPhotoListItem.imageSource}
        id={sampleDataForPhotoListItem.id}
        location={sampleDataForPhotoListItem.location}
        profile={sampleDataForPhotoListItem.profile}
      />
    </div>
  );
};

export default App;