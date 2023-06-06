function LanguageReducer(languageR, action){
    console.log("language reducer");
    switch(action.type){
        case "SET_LANGUAGE":{
            return action.payload
        }
        default: return languageR;
    }
}
export default LanguageReducer;