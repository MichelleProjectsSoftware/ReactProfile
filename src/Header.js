import React from 'react';
import profileImage from './me.png'; 

const Header = () => {
  return (
    <header className="header">
        <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div>
          <h1>Michelle Li - Profile</h1>
          <h5>Calgary AB; michellelialberta@gmail.com</h5>
        </div>
    </header>
  );
};

export default Header;

