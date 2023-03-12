import "./../styles/sideNavigationItem.css";

function SideNavigationItem({ name, icon }) {
  return (
    <div className="side-navigation-item">
      <a href="">
        {icon}
        <span>{name}</span>
      </a>
    </div>
  );
}

export default SideNavigationItem;
