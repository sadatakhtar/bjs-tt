import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import SignIn from "./components/SignIn";

function App() {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/" component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
