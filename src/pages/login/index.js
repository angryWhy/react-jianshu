import React, { memo,useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginAction } from './store/actionactors'
import {LoginWrapper,Input,Button,LoginBox} from "./styled"
export default memo(function Login() {
    const dispatch = useDispatch()
    const {login}=useSelector(state=>({login:state.login.login}),shallowEqual)
    const inputRef = useRef()
    const passRef = useRef()
    function handeLogin(){
        dispatch(loginAction())
        console.log(inputRef.current.value)
        console.log(passRef.current.value)
    }
    if(!login){
    return (
        <LoginWrapper>
            <LoginBox>
            <Input ref={inputRef} placeholder='请输入账号'/>
            <Input ref={passRef} placeholder='请输入密码'/>
            <Button onClick={e=>handeLogin(inputRef.current,passRef.current.value)}>登陆</Button>
            </LoginBox>
        </LoginWrapper>
    )}
    else{
        return <Redirect to="/"/>
    }
})
