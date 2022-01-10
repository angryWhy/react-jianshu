import React, { PureComponent } from 'react'
import { HeaderWrapper,Logo,Nav,NavItem,NavInput,Addition,Button,SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux';
import { changeHeadSpread,changeHeadNoSpread } from './store/actionactors';
const Header=(props)=> {
    // constructor(props){
    //     super();
    //     // this.state={
    //     //     isSpread:false
    //     // }
    //     this.handleChang=this.handleChang.bind(this);
    //     this.handleChangDis=this.handleChangDis.bind(this);
    // }
    // handleChangShow(){
    //     this.setState({
    //         isSpread:true
    //     })
    // }
    // handleChangDis(){
    //     this.setState({
    //         isSpread:false
    //     })
    // }
    // render() {
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
                    <CSSTransition in={props.isSpread} timeout={200} classNames="slide">
                <NavInput className={props.isSpread? "focused":""} 
                          onFocus={props.handleChangShow}
                          onBlur={props.handleChangDis}
                />
                    </CSSTransition>
                <span className={props.isSpread? "focused iconfont icon-fangdajing":"iconfont icon-fangdajing" }></span>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='reg'><span className='wri'></span>写文章</Button>
                <Button className='writting'>注册</Button>
            </Addition>
            </HeaderWrapper>
        )
    }
// }
const mapStateToProps=state=>{
    return{
        isSpread:state.head.isSpread
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        handleChangShow(){
            dispatch(changeHeadSpread())
        },
        handleChangDis(){
            dispatch(changeHeadNoSpread())
        }
    }
}
// class Header extends PureComponent {
//     constructor(props){
//         super();
//         // this.state={
//         //     isSpread:false
//         // }
//         this.handleChang=this.handleChang.bind(this);
//         this.handleChangDis=this.handleChangDis.bind(this);
//     }
//     // handleChangShow(){
//     //     this.setState({
//     //         isSpread:true
//     //     })
//     // }
//     // handleChangDis(){
//     //     this.setState({
//     //         isSpread:false
//     //     })
//     // }
//     render() {
//         return (
//             <HeaderWrapper>
//                   <Logo/>
//             <Nav>
//                 <NavItem className='left'>
//                 <span className='iconfont icon-zhinanzhen'></span>
//                     首页
//                 </NavItem>
//                 <NavItem className='left'>
//                 <span className='iconfont icon-xiazai'></span>
//                     下载APP
//                 </NavItem>
//                 <NavItem className='left'>
//                     <span className='iconfont icon-11guanxi'></span>IT技术
//                 </NavItem>
//                 <NavItem className='right'>Aa</NavItem>
//                 <NavItem className='right'>登陆</NavItem>
//                 <SearchWrapper>
//                     <CSSTransition in={this.props.isSpread} timeout={200} classNames="slide">
//                 <NavInput className={this.props.isSpread? "focused":""} 
//                           onFocus={this.props.handleChangShow}
//                           onBlur={this.props.handleChangDis}
//                 />
//                     </CSSTransition>
//                 <span className={this.props.isSpread? "focused iconfont icon-fangdajing":"iconfont icon-fangdajing" }></span>
//                 </SearchWrapper>
//             </Nav>
//             <Addition>
//                 <Button className='reg'><span className='wri'></span>写文章</Button>
//                 <Button className='writting'>注册</Button>
//             </Addition>
//             </HeaderWrapper>
//         )
//     }
// }
// const mapStateToProps=state=>{
//     return{
//         isSpread:state.head.isSpread
//     }
// }
// const mapDispatchToProps=dispatch=>{
//     return{
//         handleChangShow(){
//             dispatch(changeHeadSpread())
//         },
//         handleChangDis(){
//             dispatch(changeHeadNoSpread())
//         }
//     }
// }
export default connect(mapStateToProps,mapDispatchToProps)(Header)
