import React, { memo } from 'react'
import { ListInfo, ListItem } from '../style'
import pic01 from "../../../assets/img/pic.jpg"
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
export default memo(function List() {
    const { recommend } = useSelector(state => ({ recommend: state.home.recommend }), shallowEqual)
    return (
        <div>
            {
                recommend.map((item, index) => {
                    return (<ListItem key={index}>
                        <img className='pic' src={pic01} alt=""/>
                        <ListInfo>
                            <h3 className='title'>{item.title}</h3>
                            <p className='desc'>{item.desc}</p>
                        </ListInfo>
                    </ListItem>)
                })
            }
        </div>
    )
})
