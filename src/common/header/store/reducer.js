import * as actionTypes from "./constants"
const initState={
    isSpread:false
}
function reducer(state=initState,action) {
    switch (action.type) {
        case actionTypes.HEAD_IS_SPREAD:
            return{...state,isSpread:true}
        case actionTypes.HEAD_NO_SPREAD:
            return{...state,isSpread:false}
        default:
            return state;
    }
}
export default reducer