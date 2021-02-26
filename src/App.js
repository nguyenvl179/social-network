import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './boxicons/css/boxicons.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from './pages/Home';
import Explore from './pages/Explore';
import Bookmark from './pages/Bookmark';
import Login from './pages/Login';
import Header from './components/Header';
import routes from './pages/route';

function App() {
  let isLogin = false;

  return (
    <div className="App">
    {!isLogin ?
      <Login />
      :
      (
        <Router>
        <Header />
        <Switch>
            <Route 
              path='/' 
              exact={true}
            >
              <Redirect to="/home"/>
            </Route>
            <Route 
              path='/home' 
              component={Home}
              exact={true}
            >
            </Route>
            <Route 
              path='/explore' 
              component={Explore}
              exact={true}
            >
            </Route>
            <Route 
              path='/bookmark' 
              component={Bookmark}
              exact={true}
            >
            </Route>
        </Switch>        
        </Router>
      )
    } 
      
    </div>
  );
}

export default App;
