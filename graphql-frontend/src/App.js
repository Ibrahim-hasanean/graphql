import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Event from "./pages/Event/Event";
import Booking from "./pages/Booking/Booking";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Redirect from="/" to="/login" exact />
            <Route path="/auth" component={Auth} />
            <Route path="/events" component={Event} />
            <Route path="/booking" component={Booking} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
