import * as actionTypes from "./constants"
const initState = {
    topicList: [],
    recommend: [],
    nextPage:0,
    showScroll:false,
}
function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_HOME_LIST:
            return{...state,topicList:action.res.data.data.topicList,recommend:action.res.data.data.recommend}
        case actionTypes.MERGE_HOME_LIST:
            return{...state,recommend:state.recommend.concat(action.res.data.data.recommend),nextPage:action.nextPage}
        case actionTypes.SHOW_SCROLL:
            return{...state,showScroll:true}
        case actionTypes.NO_SHOW_SCROLL:
            return{...state,showScroll:false}
        default:
            return state;
    }
}
export default reducer