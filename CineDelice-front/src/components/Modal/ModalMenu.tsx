import React from 'react'; // Importing React library for creating components
import './ModalMenu.scss'; // Importing the SCSS file for styling the modal menu
import Navbar from '../App/Navbar/Navbar'; // Importing Navbar component from the specified path
import HeaderAuth from '../App/Header/HeaderAuth'; // Importing HeaderAuth component from the specified path
import { FaTimes } from 'react-icons/fa'; // Importing the 'FaTimes' icon for the close button

interface ModalMenuProps {
  isOpen: boolean; // A boolean to indicate whether the modal is open or not
  onClose: () => void; // A function to be called when the modal should be closed
}

const ModalMenu = ({ isOpen, onClose }: ModalMenuProps) => {
  if (!isOpen) return null; // If the modal is not open, render nothing (null)

  // Function to handle clicks on the overlay
  const handleOverlayClick = (event: React.MouseEvent) => {
    // Check if the click was directly on the overlay and not on its child elements
    if (event.target === event.currentTarget) {
      onClose(); // Call the onClose function to close the modal
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        {/* Button to close the modal, using the FaTimes icon */}
        <button className="modal-close" onClick={onClose}>
          <FaTimes /> {/* FaTimes icon inside the button */}
        </button>
        
        {/* Navbar component inside the modal */}
        <Navbar onNavItemClick={onClose} /> {/* Pass the onClose function to Navbar */}
        <HeaderAuth /> {/* HeaderAuth component inside the modal */}
       
      </div>
    </div>
  );
};

export default ModalMenu; // Exporting the ModalMenu component for use in other parts of the application
