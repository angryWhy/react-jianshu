import * as actionTypes from "./constants"
import axios from "axios"
export const changeHeadSpread=()=>({
    type:actionTypes.HEAD_IS_SPREAD
})
export const changeHeadNoSpread=()=>({
    type:actionTypes.HEAD_NO_SPREAD
})
export const getHeaderList=(res)=>({
    type:actionTypes.GET_LIST,
    res,
    totalPage:Math.ceil(res.length/5)
})
export const showTbale=()=>({
    type:actionTypes.SHOW_TABLE
})  
export const noShowTbale=()=>({
    type:actionTypes.NO_SHJOW_TABLE
})
export const changePage=(pageNum)=>({
    type:actionTypes.CHANGE_PAGE,
    pageNum
})
export const getList=()=>{
    return dispatch=>{
        axios.get("/api/headerList.json").then(res=>{
            dispatch(getHeaderList(res.data.data))
            console.log(res);
        })
    }
}

