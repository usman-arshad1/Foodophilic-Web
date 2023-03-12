import "./../styles/sideNavigation.css";
import { Link } from "react-router-dom";

import SideNavigationItem from "./SideNavigationItem";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import UserProfile from "./userProfile";

function SideNavigation() {
  return (
    <div className="side-navigation">
      <div className="navigation-logo">
        <img src="./src/assets/smiley.png" alt="logo image" />
      </div>

      <div className="navigation-item-container">
        <SideNavigationItem name="Home" path="/" icon={<HomeOutlinedIcon />} />
        <SideNavigationItem
          name="Restaurants"
          path="/restaurant"
          icon={<RestaurantIcon />}
        />
        <SideNavigationItem
          name="Recipes"
          path="/recipe"
          icon={<ArticleOutlinedIcon />}
        />
        <SideNavigationItem
          name="Messages"
          path="/message"
          icon={<ForumOutlinedIcon />}
        />
        <SideNavigationItem
          name="Reviews"
          path="/review"
          icon={<ReviewsOutlinedIcon />}
        />
      </div>

      <div className="side-nav-profile">
        <Link to="/profile" className="navigation-profile-container">
          <div>
            <img src="./src/assets/king-slime.webp" alt="user pp" />
          </div>
          <p>{UserProfile.getFirstName()}</p>
        </Link>
      </div>
    </div>
  );
}

export default SideNavigation;
