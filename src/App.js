import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'
import './App.css';
import './boxicons/css/boxicons.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history'
import Home from './pages/Home';
import Explore from './pages/Explore';
import Bookmark from './pages/Bookmark';
import Login from './pages/Login';
import Setting from './pages/Setting';
import routes from './pages/route';
import { MemberTemplate } from './templates/MemberTemplate';
import Page404 from './pages/Page404';

export const history = createBrowserHistory();

function App() {
  let isLogin = true;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact={true} >
            <Redirect to="/home" />
          </Route>
          <Route path='/login' exact={true} component={Login} />
          <MemberTemplate path='/home' component={Home} exact={true} />
          <MemberTemplate path='/explore' component={Explore} exact={true} />
          <MemberTemplate path='/bookmark' component={Bookmark} exact={true} />
          <MemberTemplate path='/setting' component={Setting} exact={true} />
          <Route path='*' component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
