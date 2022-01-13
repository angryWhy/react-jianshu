import * as actionTypes from "./constants"
import axios from 'axios'
export const changeLoginTrue=()=>({
    type:actionTypes.LOGIN
})
export const changeLoginFalse=()=>({
    type:actionTypes.EXIT
})
export const loginAction=(acc,pass)=>{
    return dispatch=>{
        axios.get("/api/login.json?account="+acc+"&password="+pass).then(
            res=>{
                const result=res.data.data
                if(result){
                    dispatch(changeLoginTrue())
                }
                else{
                    alert("失败")
                }
            }
        )
    }
}