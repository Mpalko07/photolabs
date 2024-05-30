import React from 'react';
import closeSymbol from '../assets/closeSymbol.svg';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ onClose, photo }) => {
  console.log("Photo Details:", photo);

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
