import { useState } from "react";
import { useScale } from "../../context/AppContext";
import ContentSwitchItem from "./Switch";
import "./index.scss";

interface ContentSwitchItemProps {
  title: string;
  description: React.ReactNode;
}

interface ContentSwitchProps {
  items: ContentSwitchItemProps[];
  style?: React.CSSProperties;
}

const ContentSwitch = ({ items, style }: ContentSwitchProps) => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const { scaleRatio } = useScale();
  const itemHeight = 220 * scaleRatio; // Adjust height based on scale ratio

  const handleItemClick = (index: number) => {
    const switchContentBody = document.querySelector(".kuvia-content-switch-content-body");
    if (switchContentBody) {
      switchContentBody.scrollTo({
        behavior: "smooth",
        top: 0,
      });
      setActiveItem(index);
    };
  }

  return (
    <div className="kuvia-content-switch-container">
      <div className="kuvia-content-switch-items" style={style}>
        {items.map((item, index) => (
          <ContentSwitchItem
            key={item.title}
            title={item.title}
            active={activeItem === index}
            onClick={() => handleItemClick(index)} />
        ))}
      </div>
      <div className="kuvia-content-switch-content" style={{ height: `${items.length * itemHeight - 20 * scaleRatio}px` }}>
        <div className="kuvia-content-switch-content-body">
          <div className="kuvia-content-switch-content-title">{items[activeItem].title}</div>
          <div className="kuvia-content-switch-content-description">{items[activeItem].description}</div>
        </div>
      </div>
    </div>
  );
};

export default ContentSwitch;
