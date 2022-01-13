import * as actionTypes from "./constants"
const initState = {
    login:false
}
function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.LOGIN:
            return{...state,login:true}
        case actionTypes.EXIT:
            return{...state,login:false}
        default:
            return state;
    }
}
export default reducer