import React, { forwardRef, memo,useRef,useImperativeHandle } from 'react'
import { shallowEqual, useDispatch, useSelector, } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginAction } from './store/actionactors'
import {LoginWrapper,Input,Button,LoginBox} from "./styled"
export default memo(function Login() {
    const dispatch = useDispatch()
    const {login}=useSelector(state=>({login:state.login.login}),shallowEqual)
    const inputRef = useRef()
    const passRef = useRef()
    function handeLogin(accountValue,passValue){
        dispatch(loginAction())
        console.log(accountValue)
        console.log(passValue)
    }
    function FancyInput(props,ref){
        const input1=useRef();
        useImperativeHandle(ref,() => ({
                getValue:()=>input1.current.value
            }),
        )
        return <Input ref={input1} placeholder={props.title}/>
    }
    const FancyButton=forwardRef(FancyInput)
    if(!login){
    return (
        <LoginWrapper>
            <LoginBox>
            <FancyButton ref={inputRef} title="请输入账号"/>
            <FancyButton ref={passRef} title="请输入密码"/>
            <Button onClick={e=>handeLogin(inputRef.current.getValue(),passRef.current.getValue())}>登陆</Button>
            </LoginBox>
        </LoginWrapper>
    )}
    else{
        return <Redirect to="/"/>
    }
})
