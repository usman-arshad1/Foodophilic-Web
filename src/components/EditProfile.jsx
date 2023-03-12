import React from 'react';
import Popup from 'reactjs-popup';
import "./../styles/popUp.css";

const EditProfile = () => {
  return (
    <Popup
    trigger={<button className="button"> Edit Profile </button>}
    modal
    nested>
    {close => (
      <div className="modal">
        <div className="header"> 
            <div className="button closePopup" onClick={() => { close();}}>
                <span class="material-symbols-outlined"> close </span>
            </div>
        </div>
        <form className="content">
            <div className='imageUpload componentProfileEdit'>
                {/* <TODO>Upload image UI</TODO> */}
                <div className='imageButton'>+ Upload Image</div>
            </div>
            <span className='inlineImage componentProfileEdit'>
                <div className='profilePic'><img src="https://dummyimage.com/600x400/000/fff" alt="Porilfe Pic"></img></div>
                <div className='usernameInfo editBoxIn'>
                    <label className='editLabel'>Username</label>
                    <textarea className='usernameInput popUpTextArea' placeholder='Enter username here' rows={1} maxLength={25}>Get username here
                    </textarea>
                </div>
            </span>
            <div className='email editBox componentProfileEdit'>
                <label className='editLabel'>Email</label>
                <textarea className='emailInfo popUpTextArea' placeholder='Enter email here' rows={2} maxLength={255}>Get email here
                </textarea>
            </div>
            <div className='bio editBox componentProfileEdit'>
                <label className='editLabel'>Bio</label>
                <textarea className='bioInfo popUpTextArea' placeholder='Enter bio here (Max 255 characters)' rows={5} maxLength={255}>Get bio here
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

export { EditProfile }