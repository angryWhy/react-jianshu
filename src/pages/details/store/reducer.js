import * as actionTypes from "./constants"
const initState = {
    titleList:[],
    descList:[]
}
function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_DESC_DATA:
            return{...state,titleList:action.res.data.data.title,descList:action.res.data.data.des}
        default:
            return state;
    }
}
export default reducer