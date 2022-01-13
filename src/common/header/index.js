import React, { memo, useEffect, useRef } from 'react'
import { HeaderWrapper,Logo,Nav,NavItem,NavInput,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchList } from './style'
import { CSSTransition } from 'react-transition-group'
import { changeHeadNoSpread,changeHeadSpread,getList,showTbale,noShowTbale,changePage } from './store/actionactors'
import { changeLoginFalse } from '../../pages/login/store/actionactors'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
import { Link } from 'react-router-dom'
export default memo(function Header() {
    const spin = useRef()
    const dispatch = useDispatch();
    const {isSpread,headList,mouseIn,page,totalPage} = useSelector(state=>({isSpread:state.head.isSpread,headList:state.head.headItemList,mouseIn:state.head.mouseIn,page:state.head.page,totalPage:state.head.totalPage}),shallowEqual)
    const {login} = useSelector(state =>({login:state.login.login}),shallowEqual)
    function headShow(headList){
        headList.length===0&&dispatch(getList())
        dispatch(changeHeadSpread())
    }
    function headNoShow() {
        dispatch(changeHeadNoSpread())
    }
    function enterTbale() {
        dispatch(showTbale())
    }
    function leaveTbale() {
        dispatch(noShowTbale())
    }
    function refresh(page,totalPage,spin) {
        spin.current.classList.add("spin")
        
        console.log(spin.current.classList);
        if(page<totalPage-1){
            dispatch(changePage(page+1))
        }else{
            dispatch(changePage(0))
        }
        setTimeout(() => {
            spin.current.classList.remove("spin") 
        }, 500);
    }
    function showItem(page,headList){
        const newList=[]
        for(let i=page*5;i<(page+1)*5;i++){
            newList.push(headList[i])
        }
        return newList
    }
    function exit() {
        dispatch(changeLoginFalse())
    }
    // function itemList(headList) {
        
    // }
    // const showItemList=useMemo(() =>itemList(itemList), [headList])
    useEffect(() => {
        console.log(headList)
    }, [headList])
    return (
        <HeaderWrapper>
            {/* <Link to="/"> */}
            <Logo href='/'/>
            {/* </Link> */}
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
                {login?<NavItem className='right' onClick={e=>exit()}>退出</NavItem>:
                <Link to="/login"><NavItem className='right'>登陆</NavItem></Link>}
                <SearchWrapper>
                    <CSSTransition in={isSpread} timeout={200} classNames="slide">
                <NavInput className={isSpread? "focused":""} 
                          onFocus={e=>headShow(headList)}
                          onBlur={e=>headNoShow()}
                />
                    </CSSTransition>
                <span className={isSpread? "focused iconfont icon-fangdajing zoom":"iconfont icon-fangdajing zoom" }></span>
                {(isSpread||mouseIn)&&<SearchInfo onMouseEnter={e=>enterTbale()} onMouseLeave={e=>leaveTbale()}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={e=>refresh(page,totalPage,spin)}> 
                        <span className='iconfont icon-spin base' ref={spin} ></span>换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                      <SearchList>
                          {
                              showItem(page,headList).map((item,index)=>{
                                  return(
                                    <SearchInfoItem key={index}>{item}</SearchInfoItem>
                                  )
                              })
                          }
                     </SearchList>
                </SearchInfo>}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Link to="/write"><Button className='reg'><span className='wri'></span>写文章</Button></Link>
                <Button className='writting'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
})
