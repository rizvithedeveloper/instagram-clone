import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login.page";

function App({ loggedIn }) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/dashboard" /> : <Login />}
        </Route>
        <Route path="/accounts/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
