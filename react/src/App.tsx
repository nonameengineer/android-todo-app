import React, { useContext, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom'
import './App.scss'
import { NewCard } from './features/new-card/NewCard'
import { Home } from './features/home/Home'
import { ReactComponent as DeleteIcon } from './assets/svg/delete-24px.svg'
import { ReactComponent as WBSunnyIcon } from './assets/svg/wb_sunny-24px.svg'
import Themes from './models/themes'
import { Trashcan } from './features/trashcan/Trashcan'

export const ThemeContext = React.createContext(Themes.LIGHT)

function App () {
  const [theme, setTheme] = useState(useContext(ThemeContext))
  const toggleTheme = () => {
    theme === Themes.DARK
      ? setTheme(Themes.LIGHT)
      : setTheme(Themes.DARK)
  }
  const history = useHistory()

  const navigateToTrashcan = () => history.push('/trashcan')

  useEffect(() => {
    const BODY_DARK_CLASS = 'dark'
    theme === Themes.DARK
      ? document.body.classList.add(BODY_DARK_CLASS)
      : document.body.classList.remove(BODY_DARK_CLASS)
  }, [theme])

  return (
    <ThemeContext.Provider value={theme}>
        <div className="wrapper">
          <header>
            <div className="title">Delat<span>'</span>
            </div>
            <div className="buttons">
              <DeleteIcon onClick={navigateToTrashcan}/>
              <WBSunnyIcon onClick={toggleTheme}/>
            </div>
          </header>
          <main>
            <Switch>
              <Route path="/new">
                <NewCard/>
              </Route>
              <Route path="/trashcan">
                <Trashcan/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </main>
        </div>
    </ThemeContext.Provider>
  )
}

export default App
