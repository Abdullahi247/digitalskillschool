import { usersExperience } from "./Index/reducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    usersExperience: usersExperience
})

export default rootReducers