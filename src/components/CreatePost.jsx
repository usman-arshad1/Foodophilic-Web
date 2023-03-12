import React from 'react';
import Popup from 'reactjs-popup';
import "./../styles/popUp.css";

const CreatePost = () => {
  return (
    <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    nested>
    {close => (
      <div className="modal">
        <div className="header"> 
            <button className="button" onClick={() => { close();}}>
                close
            </button>
        </div>
        <form className="content">
            <div className='imageUpload'>
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

export { CreatePost }