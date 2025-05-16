import { useState } from "react";
import ContentSwitchItem from "./Switch";
import "./index.scss";

interface ContentSwitchItemProps {
  title: string;
  description: string;
}

interface ContentSwitchProps {
  items: ContentSwitchItemProps[];
  style?: React.CSSProperties;
}

const ContentSwitch = ({ items, style }: ContentSwitchProps) => {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <div className="kuvia-content-switch-container">
      <div className="kuvia-content-switch-items" style={style}>
        {items.map((item, index) => (
          <ContentSwitchItem key={item.title} title={item.title} active={activeItem === index} onClick={() => setActiveItem(index)} />
        ))}
      </div>
      <div className="kuvia-content-switch-content" style={{ height: `${items.length * 220 - 20}px` }}>
        <div className="kuvia-content-switch-content-body">
          <div className="kuvia-content-switch-content-title">{items[activeItem].title}</div>
          <div className="kuvia-content-switch-content-description">{items[activeItem].description}</div>
        </div>
      </div>
    </div>
  );
};

export default ContentSwitch;
