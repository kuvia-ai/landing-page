import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import {
  pressReleasesSource,
  scientificPublicationsSource,
  awardsRecognitionsSource,
} from '../../../constants/sourceData';
import UserProfile from '../../../components/UserProfile';
import anaProfileImg from '../../../assets/images/profiles-images/ana-profile.jpg';
import martinaProfileImg from '../../../assets/images/profiles-images/martina-profile.jpg';
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
    'press-release' | 'scientific-publications' | 'awards-recognitions'
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

  const activeList =
    pressSelection === 'scientific-publications'
      ? scientificPublications
      : pressReleases;

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
        <h1>Newsroom</h1>
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
          <button
            className={`${pressSelection === 'awards-recognitions' ? 'active' : 'inactive'}`}
            onClick={() => {
              setPressSelection('awards-recognitions');
            }}
          >
            Awards & Recognitions
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
          {pressSelection === 'awards-recognitions'
            ? awardsRecognitionsSource.map((award, index) => (
                <SwiperSlide key={index} className="kuvia-info-card">
                  <img
                    src={award.img}
                    alt={award.title}
                    style={{
                      objectPosition: award.imagePosition,
                      objectFit: award.imageFit as React.CSSProperties['objectFit'],
                      transform: award.imageScale
                        ? `scale(${award.imageScale})`
                        : undefined,
                    }}
                  />
                  <div className="kuvia-info-card-content">
                    <div>
                      <p className="kuvia-info-card-content-title">
                        {award.title}
                      </p>
                      <p className="kuvia-info-card-content-description">
                        {award.text}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            : activeList.map((press, index) => (
                <SwiperSlide
                  key={index}
                  className="kuvia-info-card"
                  onClick={() => {
                    window.open(press.URL, '_blank');
                  }}
                >
                  <img
                    src={press.img}
                    alt={press.img}
                    style={{ objectPosition: press.imagePosition }}
                  />
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
