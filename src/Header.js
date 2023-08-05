import React from 'react';
import profileImage from './me.png'; 

const Header = () => {
  return (
    <header className="header">
        <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div>
          <h1>Xiao Li - Profile</h1>
          <h5>Downtown Calgary AB; coolxiao@gmail.com; 403-262-7283</h5>
        </div>
    </header>
  );
};

export default Header;

