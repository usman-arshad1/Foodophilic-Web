import "./../styles/sideNavigation.css";
import { Link } from "react-router-dom";

import SideNavigationItem from "./SideNavigationItem";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import UserProfile from "./userProfile";
import multiavatar from "@multiavatar/multiavatar/esm";



function SideNavigation() {
  var svgCode = multiavatar(String(UserProfile.getUserID()));
  console.log(svgCode);
  return (
    <div className="side-navigation">
      <div className="navigation-logo">
        <img src="src\assets\logo2.png" alt="logo image" />
      </div>

      <div className="navigation-item-container">
        <SideNavigationItem name="Home" path="/main" icon={<HomeOutlinedIcon />} />
        <SideNavigationItem
          name="Restaurants"
          path="/main/restaurant"
          icon={<RestaurantIcon />}
        />
        <SideNavigationItem
          name="Recipes"
          path="/main/recipe"
          icon={<ArticleOutlinedIcon />}
        />
        <SideNavigationItem
          name="Messages"
          path="/main/message"
          icon={<ForumOutlinedIcon />}
        />
        <SideNavigationItem
          name="Reviews"
          path="/main/review"
          icon={<ReviewsOutlinedIcon />}
        />
      </div>

      <div className="side-nav-profile">
        <Link to="/main/profile" className="navigation-profile-container">
          <div
            className="svg"
            dangerouslySetInnerHTML={{ __html: svgCode }}
          ></div>
          <p>{UserProfile.getFirstName()}</p>
        </Link>
      </div>
    </div>
  );
}

export default SideNavigation;
