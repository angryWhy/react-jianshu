import React, { memo } from 'react'
import { HeaderWrapper,Logo,Nav,NavItem,NavInput,Addition,Button,SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group'
import { changeHeadNoSpread,changeHeadSpread } from './store/actionactors'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
export default memo(function Header() {
    const dispatch = useDispatch();
    const {isSpread} = useSelector(state=>({isSpread:state.head.isSpread}),shallowEqual)
    function headShow(){
        dispatch(changeHeadSpread())
    }
    function headNoShow() {
        dispatch(changeHeadNoSpread())
    }
    return (
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left'>
                <span className='iconfont icon-zhinanzhen'></span>
                    首页
                </NavItem>
                <NavItem className='left'>
                <span className='iconfont icon-xiazai'></span>
                    下载APP
                </NavItem>
                <NavItem className='left'>
                    <span className='iconfont icon-11guanxi'></span>IT技术
                </NavItem>
                <NavItem className='right'>Aa</NavItem>
                <NavItem className='right'>登陆</NavItem>
                <SearchWrapper>
                    <CSSTransition in={isSpread} timeout={200} classNames="slide">
                <NavInput className={isSpread? "focused":""} 
                          onFocus={e=>headShow()}
                          onBlur={e=>headNoShow()}
                />
                    </CSSTransition>
                <span className={isSpread? "focused iconfont icon-fangdajing":"iconfont icon-fangdajing" }></span>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='reg'><span className='wri'></span>写文章</Button>
                <Button className='writting'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
})
