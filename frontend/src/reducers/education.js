function EducationReducer(educationR, action){
    console.log("education reducer");
    switch(action.type){
        case "SET_EDUCATION":{
            return action.payload
        }
        default: return educationR;
    }
}
export default EducationReducer;