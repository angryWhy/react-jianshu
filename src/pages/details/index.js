import React, { memo,useEffect } from 'react'
import { DetailsWrapper,Header,Content } from './style'
import url from"../../assets/img/details.jpg"
import { useSelector,useDispatch,shallowEqual } from 'react-redux'
import { getDescData } from './store/actionactors'
import { withRouter } from 'react-router-dom'
export default withRouter (memo(function Details(props) {
    const dispatch = useDispatch()
   
    const {titleList,descList} = useSelector(state =>({titleList:state.details.titleList,descList:state.details.descList}),shallowEqual)
    console.log(titleList)
    useEffect(() => {
        const id=props.match.params.id;
        dispatch(getDescData(id))
        console.log("这是id",id);
    }, [dispatch,props.match.params.id])
    return (
        <DetailsWrapper>
            <Header> {
                titleList.map(item=>{
                    return(
                        <div key={item.title}>{item.title}</div>
                    )
                })
            }</Header>
            <Content>
                <img src={url} alt=''/>
                {
                    descList.map(item=>{
                        return(
                            <div key={item}>{item.desc}</div>
                        )
                    })
                }
            </Content>
           
        </DetailsWrapper>
    )
}))
