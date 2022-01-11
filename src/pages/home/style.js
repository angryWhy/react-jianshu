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
width:280px;
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
export const RecommendWrapper=styled.div`
margin:30px 0;
width:280px;
`
export const RecommendItem=styled.div`
width:280px;
height:50px;
background:url(${props=>props.imgUrl});
background-size:contain;
`
export const WritterWrap=styled.div`
width:278px;
border:1px solid  #dcdcdc;
border-radius:3px;
height:300px;
line-height:300px;
text-align:center;
background:red;
`
export const LoadMore=styled.div`
width:100%;
height:40px;
line-height:40px;
background:#a5a5a5;
text-align:center;
border-radius:20px;
color:#fff;
margin:30px 0;
cursor:pointer;
`