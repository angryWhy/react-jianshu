import * as actionTypes from "./constants"
import axios from 'axios'
export const getData=(res)=>({
    type:actionTypes.GET_DESC_DATA,
    res
})
export const getDescData=()=>{
    return dispatch=>{
        axios.get("/api/details.json").then(res=>{
            console.log(res);
            dispatch(getData(res))
            console.log(res);
        })
    }
}