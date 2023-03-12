var UserProfile = (function() {
    var username = "";
    var firstName = "";
    var userID = "";
  
    var getUsername = function() {
      return username;    // Or pull this from cookie/localStorage
    };
  
    var setUsername = function(name) {
      username = name;     
      
    };
    var getFirstName = function() {
      return firstName;    // Or pull this from cookie/localStorage
    };
  
    var setFirstName = function(new_firstName) {
      firstName = new_firstName;     
      
    };

    var getUserID = function() {
      return userID;    // Or pull this from cookie/localStorage
    };
  
    var setUserID = function(new_userID) {
      userID = new_userID;     
      
    };


    return {
      getUsername:  getUsername,
      setUsername: setUsername,
      getFirstName : getFirstName,
      setFirstName : setFirstName,
      getUserID : getUserID,
      setUserID : setUserID 
    }
  
  })();
  
  export default UserProfile;