import React from 'react';
import Popup from 'reactjs-popup';
import "./../styles/popUp.css";

const CreatePost = () => {
  return (
    <Popup
    trigger={<button className="button"> Create Post </button>}
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
            <div className='imageUpload createItem'>
                {/* <TODO>Upload image UI</TODO> */}
                <div className='imageButton'>+ Upload Image</div>
            </div>
            <span className='tags createItem'>
                <div className='postTag'> Tag </div>
                <div className='postTag'> Tag </div>
                <div className='postTag'> Tag </div>
                <div className='addTag'><span class="material-symbols-outlined">add_circle</span></div>
            </span>
            <div className='postBio createItem'>
                <textarea className='bioInput' placeholder='Enter text here'>
                </textarea>
            </div>
            <div className='actionButtons createItem'>
                <div className='actButtons locationButton'>Add Location</div>
                <button className='actButtons postButton'>Post</button>
            </div>
        </form>
      </div>
    )}
  </Popup>
  )
}

export { CreatePost }