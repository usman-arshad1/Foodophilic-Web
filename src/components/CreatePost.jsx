import React, { createElement, useState, useEffect  } from 'react';
import Popup from 'reactjs-popup';
import { v4 as uuidv4 } from 'uuid';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import "./../styles/popUp.css";

const CreatePost = () => {
  const [message, setMessage] = useState('');
  const [tags, setTags] = useState([]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  }

  function addTag() {
    setTags([...tags, {text: {message}, id: uuidv4()}]);
    // console.log(tags);

    setMessage('');
  }

  return (
    <Popup
      trigger={<button className="button"> Create Post </button>}
      modal
      nested>
      {close => (
        <div className="modal">
          <div className="header">
            <div className="button closePopup" onClick={() => { addTag(); }}>
              <CloseOutlinedIcon></CloseOutlinedIcon>
            </div>
          </div>
          <form className="content">
            <div className='imageUpload createItem'>
              {/* <TODO>Upload image UI</TODO> */}
              <div className='imageButton'>+ Upload Image</div>
            </div>
            <div className='tagsTitle'>Tags</div>
            <span className='tags createItem'>
              <span className='tags tagsContainer'>
                {
                  tags.map((item) => {
                    console.log(item);
                    return (<div key={item.id} className='postTag'>{item.text.message}</div>)
                  })
                }
                <div className='addTagBox'>
                  <input type="text" placeholder='Add tag...' className='inputTag' maxLength={20} onChange={handleChange} value={message}></input>
                  <AddCircleOutlineOutlinedIcon className='addTag' onClick={() => { addTag(); }}></AddCircleOutlineOutlinedIcon> {/*Change function to add tag*/}
                </div>
              </span>
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