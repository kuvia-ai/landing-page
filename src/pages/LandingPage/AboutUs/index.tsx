import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import pressReleaseData from '../../../assets/pressReleasesData.json';
import scientificPublicationData from '../../../assets/scientificPublicationsData.json';
import UserProfile from '../../../components/UserProfile';
import andreProfileImg from '../../../images/andre-profile.jpg';
import oliProfileImg from '../../../images/oli-profile.png';
import anaProfileImg from '../../../images/ana-profile.jpg';
import martinaProfileImg from '../../../images/martina-profile.jpg';

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

  const pressReleases = pressReleaseData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const scientificPublications = scientificPublicationData.sort((a, b) => {
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
      userImg: andreProfileImg,
      userName: 'Andrea Erbetti',
      userDescription: 'COO & Co-Founder',
      userProfileLink: 'https://www.linkedin.com/in/andrea-erbetti-856165248/',
    },
    {
      userImg: oliProfileImg,
      userName: 'Olivia Sanguinetti',
      userDescription: 'AI Specialist & Co-Founder',
      userProfileLink: 'https://www.linkedin.com/in/oliviasanguinetti/',
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
              <img src={require(`../../../${press.img}`)} alt={press.img} />
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
