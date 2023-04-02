import { combineReducers } from "redux";
import reducer1 from "./reducer";

const reducers= combineReducers({
    interns: reducer1
})

export default reducers;