import * as actionTypes from "./constants"
const initState={
    isSpread:false,
    headItemList:[],
    mouseIn:false,
    page:0,
    totalPage:1
}
function reducer(state=initState,action) {
    switch (action.type) {
        case actionTypes.HEAD_IS_SPREAD:
            return{...state,isSpread:true}
        case actionTypes.HEAD_NO_SPREAD:
            return{...state,isSpread:false}
        case actionTypes.GET_LIST:
            return{...state,headItemList:action.res,totalPage:action.totalPage}
        case actionTypes.SHOW_TABLE:
            return{...state,mouseIn:true}
        case actionTypes.NO_SHJOW_TABLE:
            return{...state,mouseIn:false}
        case actionTypes.CHANGE_PAGE:
            return{...state,page:action.pageNum}
        default:
            return state;
    }
}
export default reducer