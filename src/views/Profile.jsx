import "./../styles/profile.css";

function Profile({ user, username, numberPosts,profile }) {
    return (
        <div className='profile'>
                    <img src=".\src\assets\banhmi.png" alt="No Image Found" />
            <div className='head'>
                <img src='.\src\assets\istockphoto-1223671392-612x612.jpg' alt="No Image Found"/>
                <div className="edit">
                    <button type="button">Edit Profile</button>
                </div>
                <div className='profile_name'>{user}</div>
                <div className='username'>@{username}</div>
                <div className='numberOfPosts'>{numberPosts} Posts</div>
                <div className="bio">I am Sim, the Simmiest of rattiest of all Sims, ruler of Simtarctica.</div>
            </div>
            <div className="body"></div>
        </div>
    )
}

export default Profile