import React, { memo, useEffect } from 'react'
import Topic from './components/topic'
import List from './components/list'
import Recommend from './components/recommend'
import Writter from './components/writter'
import { HomeWrapper,HomeLeft,HomeRight,BackTop } from './style'
import imgUrl from "../../assets/img/banner.jpg"
import { useDispatch, useSelector } from 'react-redux'
import { getHomeList, noShowScroll,ShowScroll } from './store/actionactors'
export default memo(function Home() {
    const dispatch = useDispatch();
    const {showScroll} = useSelector(state => ({showScroll:state.home.showScroll}))
    useEffect(() => {  
            dispatch(getHomeList())
            window.addEventListener("scroll",()=>{
              const pos= document.documentElement.scrollTop
              if(pos>400){
                dispatch(ShowScroll())
              }else{
                  dispatch(noShowScroll())
              }
            })
    }, [dispatch])
    function handleTo() {
        window.scrollTo(0,0)
    }
    return (
        <HomeWrapper>
            <HomeLeft>
                <img className='banner' src={imgUrl} alt=''/>
                <Topic/>
                <List/>
            </HomeLeft>
            <HomeRight>
                <Recommend/>
                <Writter/>
            </HomeRight>
           {showScroll&&<BackTop onClick={e=>handleTo()}>返回顶部</BackTop>}
        </HomeWrapper>
    )
})
