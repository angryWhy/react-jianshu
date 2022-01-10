import styled from "styled-components";
import headLogo from "../../assets/img/head-logo.png"
import yongyan from "../../assets/img/yongyan.png"
export const HeaderWrapper=styled.div`

height: 56px;
border-bottom:1px solid #f0f0f0 ;
position:relative;
`
export const Logo=styled.a.attrs({href:"/"})`
position: absolute;
top:0px;
left:0px;
display: block;
width:100px;
height: 56px;
background:url(${headLogo});
background-size:contain ;
`
export const Nav=styled.div`
width: 960px;
height: 100%;
margin: 0 auto;
padding-right:70px;
box-sizing:border-size;
` 
export const NavItem=styled.div`
line-height:56px;
padding:0px 15px;
font-size:17px;
&.left{
    float:left;
}
&.right{
    float:right;
    color:#969696;
}
`
export const NavInput=styled.input.attrs({
    placeholder:"搜索"
})`
padding:0 35px 0 35px;
width: 160px;
height: 38px;
padding: 0px 30px 0 20px;
margin-top:9px;
margin-left:10px ;
border: none;
outline:none;
border-radius:19px;
background: #eee;
font-size:14px;
color:#777;
&::placeholder{
    color:#999;
}
&.focused{
    width: 240px;
}
`
export const Addition=styled.div`
position: absolute;
right:0px;
top:0px;
height:56px;
margin-right:100px ;
`
export const Button=styled.div`
float: right;
margin-top:9px;
margin-right:20px;
padding: 0 20px;
border:1px solid #ec6149;
line-height:38px;
border-radius:19px;
&.writting{
    color:#ec6149
}
&.reg{
    color:#fff;
    background: #ec6149;;
}
.wri{
    margin-bottom: -5px;
    display:inline-block;
    height: 20px;
    width: 20px;
    background: url(${yongyan});
    background-size: cover;
    border: 0px;
}
`
export const SearchWrapper=styled.div`
float: left;
position: relative;
.slide-enter{
    transition: all .2s ease-out;
}
.slide-enter-active{
    width: 240px;
}
.slide-exit{
    transition: all .2s ease-out;
}
.slide-exit-active{
    width: 160px;
}
.iconfont{
    position: absolute;
    right: 0px;
    bottom: 5px;
    line-height:30px;
    text-align:center;
    width: 30px;
    height: 30px;
    border-radius:17px ;
    &.focused{
        color: #fff;
        background: #777;
    }
}
`