import "./../styles/postCard.css";

const Post = ({user,post}) => {
    const{name, profileImg } = user;
    const{time, desc, foodImg} = post;

    return (
        <div className="card">
            <div className="head">
                <img className= "img"src= {profileImg}alt="Not Found" />
                <div className="userInfo">
                    <div className="name">{name}</div>
                    <div className = "time">{time}</div>
                </div>
            </div>
            <div className="post">
                <div className="desc">{desc}</div>
                <img src={foodImg} alt="Not Found" className="post-img" />
            </div>
            
        </div>
    )
}

export {Post}