import { GlobalStyle } from "./style";
import Header from "./common/header";
import "./assets/img/iconfont/iconfont.css"
import store from './全局store';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
function App() {
  return (
    <Provider store={store}>
       <GlobalStyle />
       <BrowserRouter>
       <Header/>
       <Route exact path="/" component={Home}></Route>
       <Route path="/details/:id" component={Details}></Route>
       </BrowserRouter>
    </Provider> 
  );
}
export default App;
