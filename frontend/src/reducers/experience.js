function ExperienceReducer(experienceR, action){
    console.log("experience reducer");
    switch(action.type){
        case "SET_EXPERIENCE":{
            return action.payload
        }
        default: return experienceR;
    }
}
export default ExperienceReducer;