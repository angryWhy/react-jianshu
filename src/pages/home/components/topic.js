import React, { memo } from 'react'
import { TopicWrapper, TopicItem } from '../style'
import imgUrl1 from "../../../assets/img/imgitem1.jpg"
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
export default memo(function Topic() {
    const dispatch = useDispatch()
    const {topicList}=useSelector(state=>({topicList:state.home.topicList}),shallowEqual)
    return (
        <TopicWrapper>
            {
                topicList.map((item, index) => {
                    return (
                        <TopicItem key={index}>
                            <img src={imgUrl1} alt='' className='topic-pic' />
                            {item.title}
                        </TopicItem>
                    )
                })
            }
        </TopicWrapper>
    )
})
