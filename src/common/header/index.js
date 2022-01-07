import React, { memo, useState } from 'react'
import { HeaderWrapper,Logo,Nav,NavItem,NavInput,Addition,Button,SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group'
export default memo(function Header() {
    const [isSpread, setIsSpread] = useState(false)
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
                          onFocus={e=>setIsSpread(true)}
                          onBlur={e=>setIsSpread(false)}
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
