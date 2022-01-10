import { combineReducers } from "redux";
import {reducer as headReducer} from "../common/header/store";
const reducer=combineReducers({
    head:headReducer
})
export default reducer
