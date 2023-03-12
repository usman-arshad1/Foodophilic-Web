import "./../styles/postCard.css";

const Post = ({ user, post }) => {
  const { name, profileImg } = user;
  const { time, desc, foodImg } = post;

  return (
    <div className="post-card">
      <div className="post-card-header">
        <img
          className="post-profile-photo"
          src={profileImg}
          alt="profile photo"
        />

        <div className="post-card-header-userInfo">
          <div className="post-card-username">{name}</div>
          <div className="post-card-time">{time}</div>
        </div>
      </div>

      <div className="post-description">{desc}</div>

      <img className="post-image" src={foodImg} alt="Not Found" />
    </div>
  );
};

export { Post };
