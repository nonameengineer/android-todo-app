import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.scss';
import {NewCard} from "./features/new-card/NewCard";
import {Home} from "./features/home/Home";

function App() {
  return (
      <>
        <header>
          <div className="wrapper">
            <div className="title">Delat<span>'</span></div>
          </div>
        </header>
        <main>
          <Router>
              <Switch>
                <Route path="/new">
                  <NewCard />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
          </Router>
        </main>
      </>
  );
}

export default App;
