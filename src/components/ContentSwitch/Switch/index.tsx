import "./index.scss";

interface ContentSwitchItemProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

const ContentSwitchItem = ({ title, active, onClick }: ContentSwitchItemProps) => {
  return (
    <div className="kuvia-content-switch-item" onClick={onClick}>
      <div className={`kuvia-content-switch-item-content ${active ? "active" : ""}`}  >{title}</div>
      {active && <div className="kuvia-content-switch-item-circle" />}
    </div>
  );
};

export default ContentSwitchItem;
