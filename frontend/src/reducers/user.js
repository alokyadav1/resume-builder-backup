function UserReducer(user, action){
    console.log("User reducer");
    switch(action.type){
        case "SET_USER":{
            return action.payload
        }
        default: return user;
    }
}
export default UserReducer;