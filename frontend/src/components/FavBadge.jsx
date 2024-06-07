import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, count }) => {
  return (
    <div className='fav-badge'>
      {isFavPhotoExist && (
        <div className='fav-badge__count'>
          <span>{count}</span>
        </div>
      )}
      <FavIcon displayAlert={!!isFavPhotoExist} />
    </div>
  );
};

export default FavBadge;
