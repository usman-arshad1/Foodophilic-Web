import "./../styles/postCard.css";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const Post = ({ post }) => {
  const { location, metadata, postDate, postType, tags, user, userID } = post;

  const storage = getStorage();
getDownloadURL(ref(storage, post.metadata.images[0]))
  .then((url) => {
    const img = document.querySelector("#post-image" + metadata.images[0]);
    img.setAttribute('src', url);
  })

  const getDateFromSeconds = (seconds) => {
    const t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(seconds);

    const day = t.getDate();

    const month = t.getMonth();

    const year = t.getFullYear();
    return month + "/" + day + "/" + year;
  };

  return (
    <div className="post-card">
      <div className="post-card-header">
        <img
          className="post-profile-photo"
          src={"./src/assets/pizza-with-pineapple-and-thin-crust.jpg"}
          alt="profile photo"
        />

        <div className="post-card-header-userInfo">
          <div className="post-card-username">{user.firstName}</div>
          <div className="post-card-time">
            {getDateFromSeconds(postDate.seconds)}
          </div>
        </div>
      </div>

      <div className="post-description">{metadata.text}</div>

      <img
        id={"post-image" + metadata.images[0]}
        className = "post-image"
        src={"./src/assets/pizza-with-pineapple-and-thin-crust.jpg"}
        alt="Not Found"
      />
    </div>
  );
};

export { Post };
