// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// Components
import Home from "./components/Home";
import MapView from "./components/MapView";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/map" component={MapView} />
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
