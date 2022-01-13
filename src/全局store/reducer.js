import { combineReducers } from "redux";
import {reducer as headReducer} from "../common/header/store";
import {reducer as homeReducer} from "../pages/home/store/index"
import {reducer as detailsRecuer} from "../pages/details/store/index"
import {reducer as loginReducer} from "../pages/login/store/index"
const reducer=combineReducers({
    head:headReducer,
    home:homeReducer,
    details:detailsRecuer,
    login:loginReducer
})
export default reducer
