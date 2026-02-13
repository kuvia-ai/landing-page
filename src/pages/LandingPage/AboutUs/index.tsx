import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import {
  pressReleasesSource,
  scientificPublicationsSource,
} from '../../../constants/sourceData';
import UserProfile from '../../../components/UserProfile';
import anaProfileImg from '../../../assets/images/profiles-images/ana-profile.jpg';
import martinaProfileImg from '../../../assets/images/profiles-images/martina-profile.jpg';
import manuelProfileImg from '../../../assets/images/profiles-images/manuel-profile.jpg';
import adrianProfileImg from '../../../assets/images/profiles-images/adrian-profile.jpg';

import './index.scss';
import 'swiper/css';
import 'swiper/css/mousewheel';

interface UserProfile {
  userImg: string;
  userName: string;
  userDescription: string;
  userProfileLink: string;
}

const AboutUs: React.FC = () => {
  const [pressSelection, setPressSelection] = useState<
    'press-release' | 'scientific-publications'
  >('press-release');

  const pressReleases = pressReleasesSource.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const scientificPublications = scientificPublicationsSource.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const usersProfiles: UserProfile[] = [
    {
      userImg: anaProfileImg,
      userName: 'Ana Gorodisch',
      userDescription: 'CEO & Co-Founder',
      userProfileLink: 'https://www.linkedin.com/in/anagorodisch/',
    },
    {
      userImg: martinaProfileImg,
      userName: 'Martina Belluomini',
      userDescription: 'CTO & Co-Founder',
      userProfileLink:
        'https://www.linkedin.com/in/martina-belluomini-1b7708240/',
    },
    {
      userImg: manuelProfileImg,
      userName: 'Manuel Smolkin',
      userDescription: 'Head of Clinical Strategy',
      userProfileLink: 'https://www.linkedin.com/in/manuelsmolkin/',
    },
    {
      userImg: adrianProfileImg,
      userName: 'Adrian Federico Perez',
      userDescription: 'Senior AI Engineer',
      userProfileLink:
        'https://www.linkedin.com/in/adrian-federico-perez-6849b529',
    },
  ];

  return (
    <div className="kuvia-aboutus">
      <div className="kuvia-aboutus-press">
        <h1>Press</h1>
        <div className="kuvia-aboutus-toggles">
          <button
            className={`${pressSelection === 'press-release' ? 'active' : 'inactive'}`}
            onClick={() => {
              setPressSelection('press-release');
            }}
          >
            Press Release
          </button>
          <button
            className={`${pressSelection === 'scientific-publications' ? 'active' : 'inactive'}`}
            onClick={() => {
              setPressSelection('scientific-publications');
            }}
          >
            Scientific Publications
          </button>
        </div>
        <Swiper
          modules={[Mousewheel]}
          spaceBetween={50}
          slidesPerView="auto"
          className="kuvia-info-card-group"
          mousewheel={{
            forceToAxis: true,
            thresholdDelta: 5,
            sensitivity: 100,
          }}
        >
          {(pressSelection === 'press-release'
            ? pressReleases
            : scientificPublications
          ).map((press, index) => (
            <SwiperSlide
              key={index}
              className="kuvia-info-card"
              onClick={() => {
                window.open(press.URL, '_blank');
              }}
            >
              <img src={press.img} alt={press.img} />
              <div className="kuvia-info-card-content">
                <div>
                  <span className="kuvia-info-card-content-tag">
                    {press.type}
                  </span>
                  <p className="kuvia-info-card-content-description">
                    {press.description}
                  </p>
                </div>
                <p className="kuvia-info-card-content-date">{press.date}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="kuvia-aboutus-team">
        <h1>Team</h1>
        <div className="kuvia-aboutus-team-profile-group">
          {usersProfiles.map((profile) => (
            <UserProfile
              key={profile.userName}
              profileImage={profile.userImg}
              profileTitle={profile.userName}
              profileDescription={profile.userDescription}
              profileLink={profile.userProfileLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
