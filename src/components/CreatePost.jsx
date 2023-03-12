import React, { createElement, useState, useEffect  } from 'react';
import Popup from 'reactjs-popup';
import { v4 as uuidv4 } from 'uuid';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import "./../styles/popUp.css";

const CreatePost = () => {
  const [message, setMessage] = useState('');
  const [bio, setBio] = useState('');
  const [tags, setTags] = useState([]);

  const [selectedFile, setSelectedFile] = useState();
  const [imageLink, setImageLink] = useState();
	const [isFilePicked, setIsSelected] = useState(false);

  const changeImageHandler = (event) => {
    // console.log(URL.createObjectURL(event.target.files[0]))

		setSelectedFile(event.target.files[0]);
    setImageLink(URL.createObjectURL(event.target.files[0]));
		setIsSelected(true);
	};

	const handleSubmission = () => {
	};

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const tagsText = tags.map((tag) => tag.message);
    alert(`The name you entered was: ${tagsText}\nThe name you entered was: ${bio}`)
  }

  function addTag() {
    setTags([...tags, {message}]);

    setMessage('');
  }

  const UploadImageFile = () => {
    if (isFilePicked) {
      return (<input className='custom-file-upload centeredUpload' type="file" name="file" onChange={changeImageHandler} />)
    }
    return (<input className='custom-file-upload cornerUpload' type="file" name="file" onChange={changeImageHandler} />)
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
          <form className="content" onSubmit={handleSubmit}>
            <div className='imageUpload createItem'>
              <UploadImageFile />
              <img src={imageLink}></img>
            </div>
            <div className='tagsTitle'>Tags</div>
            <span className='tags createItem'>
              <span className='tags tagsContainer'>
                {
                  tags.map((item) => {
                    return (<div key={item.id} className='postTag'>{item.message}</div>)
                  })
                }
                <div className='addTagBox'>
                  <input type="text" placeholder='Add tag...' className='inputTag' maxLength={20} onChange={handleChangeMessage} value={message}></input>
                  <AddCircleOutlineOutlinedIcon className='addTag' onClick={() => { addTag(); }}></AddCircleOutlineOutlinedIcon>
                </div>
              </span>
            </span>
            <div className='postBio createItem'>
              <textarea className='bioInput' placeholder='Enter text here (Max 255 characters)' onChange={(e) => setBio(e.target.value)} rows={5} maxLength={280}>
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