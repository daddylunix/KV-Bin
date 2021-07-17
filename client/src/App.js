import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RegisterPage from "./Components/Pages/RegisterPage";
import LoginPage from "./Components/Pages/LoginPage";
import DashboardPage from "./Components/Pages/DashboardPage";

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/register"> <RegisterPage/> </Route>
            <Route path="/login"> <LoginPage/> </Route>
            <Route path="/dashboard"> <DashboardPage/> </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
