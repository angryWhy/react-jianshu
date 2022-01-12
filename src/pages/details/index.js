import React, { memo,useEffect } from 'react'
import { DetailsWrapper,Header,Content } from './style'
import url from"../../assets/img/details.jpg"
import { useSelector,useDispatch,shallowEqual } from 'react-redux'
import { getDescData } from './store/actionactors'
export default memo(function Details() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDescData())
    }, [dispatch])
    const {titleList,descList} = useSelector(state =>({titleList:state.details.titleList,descList:state.details.descList}),shallowEqual)
    console.log(titleList,descList)
    return (
        <DetailsWrapper>
            {
                titleList.map(item=>{
                    return(
                        <div key={item.title}>{item.title}</div>
                    )
                })
            }
        </DetailsWrapper>
    )
})
