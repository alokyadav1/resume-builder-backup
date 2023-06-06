function ContactReducer(contactR, action){
    console.log("contact reducer");
    switch(action.type){
        case "SET_CONTACT":{
            return action.payload
        }
        default: return contactR;
    }
}
export default ContactReducer;