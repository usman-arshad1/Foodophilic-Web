import "./../styles/sideNavigation.css";
import SideNavigationItem from "./SideNavigationItem";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";

function SideNavigation() {
  return (
    <div className="side-navigation">
      <div className="navigation-logo">
        <img src="./src/assets/smiley.png" alt="logo image" />
      </div>

      <div className="navigation-item-container">
        <SideNavigationItem name="Home" icon={<HomeOutlinedIcon />} />
        <SideNavigationItem name="Restaurants" icon={<RestaurantIcon />} />
        <SideNavigationItem name="Recipes" icon={<ArticleOutlinedIcon />} />
        <SideNavigationItem name="Messages" icon={<ForumOutlinedIcon />} />
        <SideNavigationItem name="Reviews" icon={<ReviewsOutlinedIcon />} />
      </div>

      <div className="stuff">
        <div className="navigation-profile-container">
          <div>
            <img src="./src/assets/king-slime.webp" alt="user pp" />
          </div>
          <p>simrat39</p>
        </div>
      </div>
    </div>
  );
}

export default SideNavigation;
