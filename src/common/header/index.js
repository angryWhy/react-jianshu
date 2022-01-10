import React, { memo, useEffect } from 'react'
import { HeaderWrapper,Logo,Nav,NavItem,NavInput,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchList } from './style'
import { CSSTransition } from 'react-transition-group'
import { changeHeadNoSpread,changeHeadSpread,getList,showTbale,noShowTbale,changePage } from './store/actionactors'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
export default memo(function Header() {
    const dispatch = useDispatch();
    const {isSpread,headList,mouseIn,page,totalPage} = useSelector(state=>({isSpread:state.head.isSpread,headList:state.head.headItemList,mouseIn:state.head.mouseIn,page:state.head.page,totalPage:state.head.totalPage}),shallowEqual)
    function headShow(){
        dispatch(getList())
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
    function refresh(page,totalPage) {
        if(page<totalPage-1){
            dispatch(changePage(page+1))
        }else{
            dispatch(changePage(0))
        }
    }
    function showItem(page,headList){
        const newList=[]
        for(let i=page*5;i<(page+1)*5;i++){
            newList.push(headList[i])
        }
        return newList
    }
    // function itemList(headList) {
        
    // }
    // const showItemList=useMemo(() =>itemList(itemList), [headList])
    useEffect(() => {
        console.log(headList)
    }, [headList])
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
                {(isSpread||mouseIn)&&<SearchInfo onMouseEnter={e=>enterTbale()} onMouseLeave={e=>leaveTbale()}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={e=>refresh(page,totalPage)}>换一换</SearchInfoSwitch>
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
                <Button className='reg'><span className='wri'></span>写文章</Button>
                <Button className='writting'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
})
