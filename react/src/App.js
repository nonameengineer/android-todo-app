import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import { NewCard } from './features/new-card/NewCard'
import { Home } from './features/home/Home'
import { ReactComponent as DeleteIcon } from './assets/svg/delete-24px.svg'
import { ReactComponent as WBSunnyIcon } from './assets/svg/wb_sunny-24px.svg'

function App () {
  return (
    <div className="wrapper">
      <header>
        <div className="title">Delat<span>'</span>
        </div>
        <div className="buttons">
          <DeleteIcon/>
          <WBSunnyIcon/>
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
    </div>

  )
}

export default App
