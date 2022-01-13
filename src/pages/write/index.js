import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
export default memo(function Writter() {
    const {login}=useSelector(state=>({login:state.login.login}),shallowEqual)
    if(login){
        return (
           <div>写文章</div>
        )}
        else{
            return <Redirect to="/login"/>
        }
})
