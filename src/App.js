import logo from './logo.svg';
import './App.css';
import Result from "./components/static/resultPage"
import Main from "./components/static/mainPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/result">
            <Result />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
