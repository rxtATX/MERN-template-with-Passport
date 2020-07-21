import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Members from "./pages/Members";
import UserForm from "./pages/UserForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={["/", "/members"]}>
            <Members />
          </Route>
          <Route exact path={["/signup", "/login"]}>
            <UserForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
