import "./../styles/main.css";

import { Post } from "../components/PostCard";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

function Main() {
  const posts = [
    {
      user: {
        name: "Linus Tech Tips",
        profileImg: "src/assets/king-slime.webp",
      },
      post: {
        time: "3h ago",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        foodImg: "./src/assets/pizza-with-pineapple-and-thin-crust.jpg",
      },
    },
    {
      user: {
        name: "Linus Tech Tips",
        profileImg: "src/assets/king-slime.webp",
      },
      post: {
        time: "3h ago",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        foodImg: "./src/assets/pizza-with-pineapple-and-thin-crust.jpg",
      },
    },
  ];

  return (
    <div className="main-container">
      <div className="search">
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>

      <div className="post">
        <Button variant="text">
          <AddCircleOutlineOutlinedIcon color="action" />
          <span>Create</span>
        </Button>
      </div>
      <div className="profileContainer">
        <div className="user-posts">
          {posts.map((post) => (
            <Post user={post.user} post={post.post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
