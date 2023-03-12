import "./../styles/postCard.css";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import multiavatar from "@multiavatar/multiavatar/esm";

var svgCode;
const Post = ({ post }) => {
  const { location, metadata, postDate, postType, tags, user, userID } = post;
  svgCode = multiavatar(String(userID));
  const storage = getStorage();
  getDownloadURL(ref(storage, post.metadata.images[0])).then((url) => {
    const img = document.querySelector("#post-image" + metadata.images[0]);
    img.setAttribute("src", url);
  });

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
        <div
          className="post-profile-photo"
          dangerouslySetInnerHTML={{ __html: svgCode }}
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
        className="post-image"
        src={"./src/assets/pizza-with-pineapple-and-thin-crust.jpg"}
        alt="Not Found"
      />
    </div>
  );
};

export { Post };
