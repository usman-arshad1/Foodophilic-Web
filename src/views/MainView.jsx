import "./../styles/main.css";

import { Post } from "../components/PostCard";
import CreatePost from "../components/CreatePost";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
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
import UserProfile from "../components/userProfile";
import { redirect, useNavigate } from "react-router-dom";

function Main() {
  const [posts, setPosts] = useState([]);

  const firestore = useFirestore();

  useEffect(() => {
    const postCollection = collection(firestore, "posts");
    getDocs(postCollection).then((res) => {
      setPosts([...res.docs]);
    });
  }, []);
  if(UserProfile.getFirstName() == null){
    const Navigate = useNavigate();
    Navigate("/login");
  }

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
          <CreatePost />
          {/* <Button
            variant="contained"
            sx={{ borderRadius: "25px", backgroundColor: "green" }}
            startIcon={<AddCircleOutlineOutlinedIcon />}
          >
            Create
          </Button> */}
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
