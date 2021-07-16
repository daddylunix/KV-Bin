import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RegisterPage from "./Components/Pages/RegisterPage";

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/register"> 
            <RegisterPage/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
