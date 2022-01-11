import styled from "styled-components";
export const HomeWrapper=styled.div`
overflow:hidden;
width:960px;
margin:0 auto;
`
export const HomeLeft=styled.div`
float:left;
margin-left:15px;
padding-top:30px;
width:625px;
.banner{
    width:625px;
    height:270px;
}
`
export const HomeRight=styled.div`
width:240px;
float:right;
`
export const TopicWrapper=styled.div`
overflow:hidden;
padding:20px 0px 10px 0px;
border-item:1px solid #dcdcdc;
`
export const TopicItem=styled.div`
background:red;
float:left;
height:32px;
line-height:32px;
font-size:14px;
margin-right:18px;
padding-right:10px;
background:#f7f7f7;
border:1px solid #dcdcdc;
border-radius:7px;
margin-bottom:18px;
.topic-pic{
    display:block;
    float:left;
    width:32px;
    height:32px;
}
`
export const ListItem=styled.div`
overflow:hidden;
padding:20px 0;
border-bottom:1px solid #dcdcdc;
.pic{
    width:125px;
    height:100px;
    display:block;
    float:right;
}
`
export const ListInfo=styled.div`
width:500px;
float:right;
.title{
    font-size:18px;
    line-height:27px;
    font-weight:bold;
    color:#333;
}
.desc{
    font-size:13px;
    line-height:18px;
    color:#999;
}
`