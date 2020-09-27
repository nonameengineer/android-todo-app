import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import { NewCard } from './features/new-card/NewCard'
import { Home } from './features/home/Home'
import { ReactComponent as DeleteIcon } from './assets/svg/delete-24px.svg'
import { ReactComponent as WBSunnyIcon } from './assets/svg/wb_sunny-24px.svg'
import Themes from './models/themes'

export const ThemeContext = React.createContext({
  theme: Themes.LIGHT,
  toggleTheme: () => {
    this.theme === Themes.DARK ? this.theme = Themes.LIGHT : this.theme = Themes.DARK
  },
})

function App () {
  const [theme, setTheme] = useState(useContext(ThemeContext));

  useEffect(() => {
    const BODY_DARK_CLASS = 'dark';
    theme === Themes.DARK
      ? document.body.classList.add(BODY_DARK_CLASS)
      : document.body.classList.remove(BODY_DARK_CLASS)
  }, [theme]);

  function toggleTheme() {
    theme === Themes.DARK
      ? setTheme(Themes.LIGHT)
      : setTheme(Themes.DARK)
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className="wrapper">
        <header>
          <div className="title">Delat<span>'</span>
          </div>
          <div className="buttons">
            <DeleteIcon/>
            <WBSunnyIcon onClick={toggleTheme} />
          </div>
        </header>
        <main>
          <Router>
            <Switch>
              <Route path="/new">
                <NewCard/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </Router>
        </main>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
