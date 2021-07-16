import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RegisterPage from "./Components/Pages/RegisterPage";
import LoginPage from "./Components/Pages/LoginPage";

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/register"> 
            <RegisterPage/>
            </Route>
            <Route path="/login">
              <LoginPage/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
