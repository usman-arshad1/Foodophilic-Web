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
            <div className='imageUpload'>
                {/* <TODO>Upload image UI</TODO> */}
                <div className='imageButton'>+ Upload Image</div>
            </div>
            <span className='tags'>
                <div className='postTag'> Tag </div>
                <div className='postTag'> Tag </div>
                <div className='postTag'> Tag </div>
                <div className='addTag'><span class="material-symbols-outlined">add_circle</span></div>
            </span>
            <div className='postBio'>
                <textarea className='bioInput' placeholder='Enter text here'>
                </textarea>
            </div>
            <div className='actionButtons'>
                <div className='actButtons locationButton'>Add Location</div>
                <button className='actButtons postButton'>Post</button>
            </div>
        </form>
      </div>
    )}
  </Popup>
  )
}

export { EditProfile }