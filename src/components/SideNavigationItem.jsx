import { Link } from "react-router-dom";
import "./../styles/sideNavigationItem.css";

function SideNavigationItem({ name, icon, path }) {
  return (
    <div className="side-navigation-item">
      <Link to={path}>
        {icon}
        <span>{name}</span>
      </Link>
    </div>
  );
}

export default SideNavigationItem;
