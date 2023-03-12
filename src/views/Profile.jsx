import { Post } from "../components/PostCard";
import "./../styles/profile.css";
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

import multiavatar from '@multiavatar/multiavatar/esm'
let svgCode = multiavatar(String(UserProfile.getUserID()));

function Profile({ numberPosts }) {
  const [posts, setPosts] = useState([]);

  const firestore = useFirestore();
  const postCollection = collection(firestore, "posts");

  useEffect(() => {
    getDocs(postCollection).then((res) => {
      console.log("collection",res);
      let post_Collection = [];
      res.forEach((a)=>{
        
        console.log(a);
        if(a.data().userID == UserProfile.getUserID()){
          console.log("hit");
          post_Collection.push(a);
          
        }
      })
      setPosts(post_Collection);
      
    });
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="banner-image">
          <img src=".\src\assets\banhmi.png" alt="banner image" />
        </div>

        <div className="profile-header-info-container">
          <div className="profile-photo-button-container">
            <div
              className="profile-photo" dangerouslySetInnerHTML={{__html : svgCode}}
            ></div>
            <div className="edit-button-wrapper">
              <button className="edit-button" type="button">
                Edit Profile
              </button>
            </div>
          </div>
          <div className="profile-header-info">
            <div className="profile-name-post-number-container">
              <div className="profile-name">{UserProfile.getFirstName()}</div>
              <div className="post-number">
                <span>{posts.length}</span> Posts
              </div>
            </div>

            <div className="username">@{UserProfile.getUsername()}</div>

            <div className="bio">
              {UserProfile.getBio()}
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="user-posts">
        {posts.map((post, index) => (
          <Post key={index} post={post.data()} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
