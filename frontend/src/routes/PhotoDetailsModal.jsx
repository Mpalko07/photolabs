import React from 'react';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
