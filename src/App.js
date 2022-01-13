import { GlobalStyle } from "./style";
import Header from "./common/header";
import "./assets/img/iconfont/iconfont.css"
import store from './全局store';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details/loadable";
import Login from "./pages/login"
import Write from "./pages/write";
function App() {
  return (
    <Provider store={store}>
       <GlobalStyle />
       <BrowserRouter>
       <Header/>
       <Route exact path="/" component={Home}></Route>
       <Route path="/details/:id" component={Details}></Route>
       <Route path="/login" component={Login}></Route>
       <Route path="/write" component={Write}></Route>
       </BrowserRouter>
    </Provider> 
  );
}
export default App;
