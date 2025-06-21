import { useEffect, useState } from 'react';
import Swiper from 'swiper';
import { useSwiper } from 'swiper/react';
import SliderControl from '../SliderControl';

interface SwiperSliderControlProps {
  dimension: number;
}

const SwiperSliderControl = ({ dimension }: SwiperSliderControlProps) => {
  const swiper = useSwiper();
  const [activeSwiperIndex, setActiveSwiperIndex] = useState(
    swiper.activeIndex
  );

  useEffect(() => {
    const callback = (newState: Swiper) => {
      setActiveSwiperIndex(newState.activeIndex);
    };

    swiper.on('slideChange', callback);

    return () => swiper.off('slideChange', callback);
  }, [swiper]);

  return (
    <SliderControl
      dimension={dimension}
      activeItem={swiper.activeIndex ?? 0}
      onClick={() => {}}
    />
  );
};

export default SwiperSliderControl;
