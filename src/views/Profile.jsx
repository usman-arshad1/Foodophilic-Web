import "./../styles/profile.css";

function Profile({ user, username, numberPosts }) {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="banner-image">
          <img src=".\src\assets\banhmi.png" alt="banner image" />
        </div>

        <div className="profile-header-info-container">
          <div className="profile-photo-button-container">
            <img
              className="profile-photo"
              src=".\src\assets\istockphoto-1223671392-612x612.jpg"
              alt=""
            />
            <div className="edit-button-wrapper">
              <button className="edit-button" type="button">
                Edit Profile
              </button>
            </div>
          </div>
          <div className="profile-header-info">
            <div className="profile-name-post-number-container">
              <div className="profile-name">{user}</div>
              <div className="post-number">
                <span>{numberPosts}</span> Posts
              </div>
            </div>

            <div className="username">@{username}</div>

            <div className="bio">
              I am Sim, the Simmiest of rattiest of all Sims, ruler of
              Simtarctica.
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="body"></div>
    </div>
  );
}

export default Profile;
