var UserProfile = (function() {
    var username = "";
    var firstName = "";
    var userID = "";
    var bio = "";
    var pic = "";
  
    var getUsername = function() {
      return username;    
    };
  
    var setUsername = function(name) {
      username = name;     
    };
    var getFirstName = function() {
      return firstName;    
    };
  
    var setFirstName = function(new_firstName) {
      firstName = new_firstName;     
    };

    var getUserID = function() {
      return userID;    
    };
  
    var setUserID = function(new_userID) {
      userID = new_userID;     
    };

    var getBio = function() {
      return bio;    
    };
  
    var setBio = function(new_bio) {
      bio = new_bio;     
    };

    var getPic = function() {
      return bio;    
    };
  
    var setPic = function(new_pic) {
      bio = new_pic;     
    };



    return {
      getUsername:  getUsername,
      setUsername: setUsername,
      getFirstName : getFirstName,
      setFirstName : setFirstName,
      getUserID : getUserID,
      setUserID : setUserID,
      getBio : getBio,
      setBio : setBio,
      getPic : getPic,
      setPic : setPic
    }
  
  })();
  
  export default UserProfile;