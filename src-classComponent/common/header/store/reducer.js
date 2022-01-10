import * as actionTypes from "./constants"
import { fromJS } from "immutable"
const initState=fromJS({
    isSpread:false
})
function reducer(state=initState,action) {
    switch (action.type) {
        case actionTypes.HEAD_IS_SPREAD:
            return state.set("isSpread",true)
        case actionTypes.HEAD_NO_SPREAD:
            return state.set("isSpread",false)
        default:
            return state;
    }
}
export default reducer