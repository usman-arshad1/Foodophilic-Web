import "./../styles/main.css";

import { Post } from "../components/PostCard";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { getDocs, getFirestore, collection } from "firebase/firestore";
import {
  FirebaseAppProvider,
  FirestoreProvider,
  useFirestoreDocData,
  useFirestore,
  useFirebaseApp,
  useFirestoreCollection,
} from "reactfire";
import { useState, useEffect } from "react";

function Main() {
  const [posts, setPosts] = useState([]);

  // const posts = [
  //   {
  //     user: {
  //       name: "Linus Tech Tips",
  //       profileImg: "src/assets/king-slime.webp",
  //     },
  //     post: {
  //       time: "3h ago",
  //       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  //       foodImg: "./src/assets/pizza-with-pineapple-and-thin-crust.jpg",
  //     },
  //   },
  //   {
  //     user: {
  //       name: "Linus Tech Tips",
  //       profileImg: "src/assets/king-slime.webp",
  //     },
  //     post: {
  //       time: "3h ago",
  //       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  //       foodImg: "./src/assets/pizza-with-pineapple-and-thin-crust.jpg",
  //     },
  //   },
  // ];

  const firestore = useFirestore();

  useEffect(() => {
    // const userCollection = collection(firestore, "users");
    // getDocs(userCollection).then((users) => {
    //   users.forEach((user) => {
    //     console.log("user", user.data());
    //   });
    // });

    // use for posts
    const postCollection = collection(firestore, "posts");
    getDocs(postCollection).then((res) => {
      setPosts([...res.docs]);
      // console.log(posts.docs);
      // posts.docs.forEach(data => console.log(data.data()))
    });
  }, []);

  const displayPosts = () => {
    console.log("----------------\n----------------");
    posts.forEach((post) => {
      console.log(post.data());
    });
  };
  displayPosts();
  return (
    <div className="main-container">
      <div className="main-shit">
        <div className="main-view-header">
          <div className="searchbar">
            <InputBase
              sx={{ width: "100%", padding: "0 20px" }}
              placeholder="Search"
            />
            <div className="search-button">
              <IconButton type="button" aria-label="search">
                <SearchIcon />
              </IconButton>
            </div>
          </div>
          <Button
            variant="contained"
            sx={{ borderRadius: "25px", backgroundColor: "green" }}
            startIcon={<AddCircleOutlineOutlinedIcon />}
          >
            Create
          </Button>
        </div>
      </div>

      <div className="profileContainer">
        <div className="user-posts">
          {posts.map((post, index) => (
            <Post key={index} post={post.data()} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
