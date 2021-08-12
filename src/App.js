import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { Footer } from "./components/Footer/Footer.component";
import Login from "./pages/Login/Login.page";
import SignUp from "./pages/Signup/Signup.page";
import PasswordReset from "./pages/PasswordReset/PasswordReset.page";

function App({ loggedIn }) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {loggedIn ? (
            <Redirect to="/dashboard" />
          ) : (
            <>
              <Login />
              <Footer />
            </>
          )}
        </Route>
        <Route path="/accounts/login">
          <Login />
          <Footer />
        </Route>

        <Route path="/accounts/emailsignup">
          <SignUp />
          <Footer />
        </Route>

        <Route path="/accounts/password/reset">
          <PasswordReset />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
