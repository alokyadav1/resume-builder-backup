function ProjectReducer(projectR, action){
    console.log("project reducer");
    switch(action.type){
        case "SET_PROJECT":{
            return action.payload
        }
        default: return projectR;
    }
}
export default ProjectReducer;