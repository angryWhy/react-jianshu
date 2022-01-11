import * as actionTypes from "./constants"
import axios from 'axios'
export const changeHomeList=res=>({
    type:actionTypes.GET_HOME_LIST,
    res
})
export const mergeHomeList=(res,nextPage)=>({
    type:actionTypes.MERGE_HOME_LIST,
    res,
    nextPage
})
export const getHomeList=(params)=>{
    return dispatch=>{
        axios.get("/api/home.json").then(res=>{
            dispatch(changeHomeList(res))
        })
    }
}
export const getNewHomeList=(nextPage)=>{
    return dispatch=>{
        axios.get("/api/homeList.json?page="+nextPage).then(res=>{
            dispatch(mergeHomeList(res,nextPage+1))
        })
    }
}