import React, { createElement, useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import "./../styles/popUp.css";

import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { firebaseConfig } from "../../firebaseAPI";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const EditProfile = () => {
  const [username, setUsername] = useState("GET USER NAME");
  const [firstName, setFirstName] = useState("GET FIRST NAME");
  const [bio, setBio] = useState("GET USER BIO");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const storageRef = ref(storage, imgId);

    const data = {
      location: "",
      metadata: {
        images: [imgId],
        text: bio
      },
      postDate: date,
      postType: "review",
      tags: tagsText,
      user: {
        firstName: "GET FIRST NAME",
        userName: "GET USER NAME"
      },
      userID: "GET USER ID"
    }
    var userID = "GET USER ID";

    await setDoc(doc(db, "users", userID), {
      firstName: firstName,
      username: username,
      email: email
    })
  }


  return (
    <Popup
      trigger={<button className="button"> Edit Profile </button>}
      modal
      nested>
      {close => (
        <div className="modal">
          <div className="header">
            <div className="button closePopup" onClick={() => { close(); }}>
              <CloseOutlinedIcon></CloseOutlinedIcon>
            </div>
          </div>
          <form className="content">
            <div className='imageUpload componentProfileEdit'>
              {/* <TODO>Upload image UI</TODO> */}
              <div className='imageButton'>+ Upload Image</div>
            </div>
            <span className='inlineImage componentProfileEdit'>
              <div className='profilePic'><img src="https://dummyimage.com/500x500/000/fff" alt="Profile Pic"></img></div>
              <div className='usernameInfo editBoxIn'>
                <label className='editLabel'>Username</label>
                <textarea className='usernameInput popUpTextArea' placeholder='Enter username here' onChange={(e) => setBio(e.target.value)} rows={1} maxLength={25}>Get username here
                </textarea>
              </div>
              <div className='emailInfo editBox componentProfileEdit'>
                <label className='editLabel'>Email</label>
                <textarea className='emailInfo popUpTextArea' placeholder='Enter email here' onChange={(e) => setBio(e.target.value)} rows={2} maxLength={80}>Get email here
                </textarea>
              </div>

            </span>
            <div className='bioInfo editBox componentProfileEdit'>
              <label className='editLabel'>Bio</label>
              <textarea className='bioInfo popUpTextArea' placeholder='Enter bio here (Max 255 characters)' onChange={(e) => setBio(e.target.value)} rows={5} maxLength={255}>Get bio here
              </textarea>
            </div>
            <div className='actionButtons editProfileSave componentProfileEdit'>
              <button className='actButtons postButton'>Save</button>
            </div>
          </form>
        </div>
      )}
    </Popup>
  )
}
export default EditProfile;