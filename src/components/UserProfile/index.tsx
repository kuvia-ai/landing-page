import React from 'react';
import LinkedinIcon from '../../icons/linkedinIcon.png';
import './index.scss';

interface UserProfileProps {
  profileImage: string;
  profileTitle: string;
  profileDescription: string;
  profileLink: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  profileImage,
  profileTitle,
  profileDescription,
  profileLink,
}) => {
  return (
    <div className="kuvia-user-profile-container">
      <div className="kuvia-user-profile-image">
        <img src={profileImage} alt={profileTitle} />
      </div>
      <div className="kuvia-user-profile-content">
        <p className="kuvia-user-profile-title">{profileTitle}</p>
        <p className="kuvia-user-profile-description">{profileDescription}</p>
        <a
          className="kuvia-user-profile-linkedin"
          href={profileLink}
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedinIcon} alt="Linkedin" />
          <p>LinkedIn</p>
        </a>
      </div>
    </div>
  );
};

export default UserProfile;
