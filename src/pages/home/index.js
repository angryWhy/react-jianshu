import React, { memo } from 'react'

import Topic from './components/topic'
import List from './components/list'
import Recommend from './components/recommend'
import Writter from './components/writter'
import { HomeWrapper,HomeLeft,HomeRight } from './style'
import imgUrl from "../../assets/img/banner.jpg"
export default memo(function Home() {
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
        </HomeWrapper>
    )
})
