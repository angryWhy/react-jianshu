import React, { memo } from 'react'
import { ListInfo, ListItem,LoadMore } from '../style'
import pic01 from "../../../assets/img/pic.jpg"
import {useSelector,shallowEqual, useDispatch } from 'react-redux'
import { getNewHomeList } from '../store/actionactors'
import { Link } from 'react-router-dom'
export default memo(function List() {
    const dispatch = useDispatch()
    const { recommend,nextPage } = useSelector(state => ({ recommend: state.home.recommend,nextPage:state.home.nextPage }), shallowEqual)
    function getMoreList(nextPage) {
        dispatch(getNewHomeList(nextPage))
    }
    return (
        <div>
            {
                recommend.map((item, index) => {
                    return (<ListItem key={index}>
                        <img className='pic' src={pic01} alt=""/>
                        <ListInfo>
                            <Link  to={"/details/"+item.id}><h3 className='title'>{item.title}</h3></Link>
                            <p className='desc'>{item.desc}</p>
                        </ListInfo>
                    </ListItem>)
                })
            }
            <LoadMore onClick={e=>getMoreList(nextPage)}>更多文字</LoadMore>
        </div>
    )
})
