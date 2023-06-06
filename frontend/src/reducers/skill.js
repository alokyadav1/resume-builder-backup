function SkillReducer(skillR, action){
    console.log("skill reducer");
    switch(action.type){
        case "SET_SKILL":{
            return action.payload
        }
        default: return skillR;
    }
}
export default SkillReducer;