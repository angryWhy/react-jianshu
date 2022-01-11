import { GlobalStyle } from "./style";
import Header from "./common/header";
import "./assets/img/iconfont/iconfont.css"
import store from './全局store';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from "react-router-dom";
import Home from "./pages/home";
function App() {
  return (
    <Provider store={store}>
       <GlobalStyle />
       <Header/>
       <BrowserRouter>
       <Route exact path="/" component={Home}></Route>
       </BrowserRouter>
    </Provider> 
  );
}
export default App;
