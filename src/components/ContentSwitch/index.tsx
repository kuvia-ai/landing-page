import { useContext, useState, useEffect } from 'react';
import ContentSwitchItem from './Switch';
import { AppContext } from '../../context/AppContext';
import SliderControl from '../SliderControl';
import './index.scss';

interface ContentSwitchItemProps {
  title: string;
  description: React.ReactNode;
}

interface ContentSwitchProps {
  items: ContentSwitchItemProps[];
  style?: React.CSSProperties;
}

const ContentSwitch = ({ items, style }: ContentSwitchProps) => {
  const { isMobile } = useContext(AppContext);
  const [activeItem, setActiveItem] = useState<number>(0);
  const [resetInterval, setResetInterval] = useState<boolean>(false);

  const handleItemClick = (index: number) => {
    const switchContentBody = document.querySelector(
      '.kuvia-content-switch-content-body'
    );
    if (switchContentBody) {
      switchContentBody.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
      setActiveItem(index);
    }
  };

  useEffect(() => {
    if (isMobile) {
      const slideInterval = setInterval(() => {
        setActiveItem((prev) => (prev += 1));
      }, 5000);

      return () => {
        clearInterval(slideInterval);
        setResetInterval(false);
      };
    }
  }, [resetInterval, isMobile]);

  return (
    <div className="kuvia-content-switch-container">
      {!isMobile && (
        <div className="kuvia-content-switch-items" style={style}>
          {items.map((item, index) => (
            <ContentSwitchItem
              key={item.title}
              title={item.title}
              active={activeItem % items.length === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      )}
      <div className="kuvia-content-switch-content">
        <div className="kuvia-content-switch-content-body">
          <div className="kuvia-content-switch-content-title">
            {items[activeItem % items.length].title}
          </div>
          <div className="kuvia-content-switch-content-description">
            {items[activeItem % items.length].description}
          </div>
          {isMobile && (
            <SliderControl
              dimension={items.length}
              activeItem={activeItem % items.length}
              onClick={(item) => {
                setActiveItem(item);
                setResetInterval(true);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentSwitch;
