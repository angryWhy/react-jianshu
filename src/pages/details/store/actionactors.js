import * as actionTypes from "./constants"
import axios from 'axios'
export const getData=(res)=>({
    type:actionTypes.GET_DESC_DATA,
    res
})
export const getDescData=(id)=>{
    return dispatch=>{
        axios.get("/api/details.json?"+id).then(res=>{
            console.log(id);
            dispatch(getData(res))
            console.log(res);
        })
    }
}