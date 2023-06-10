function ProfileReducer(profile, action) {
  switch (action.type) {
    case 'SET_PROFILE':
        return action.payload
    case "DELETE_PROFILE":
        return {}
    case 'UPDATE_PROFILE':
      return { ...profile, ...action.payload }
    default:
      return profile
  }
}
export default ProfileReducer