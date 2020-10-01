import React, { useContext, useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import './App.scss'
import { NewCard } from './components/new-card/NewCard'
import { Home } from './components/home/Home'
import { ReactComponent as DeleteIcon } from './assets/svg/delete-24px.svg'
import { ReactComponent as DeleteDarkIcon } from './assets/svg/delete-dark-24px.svg'
import { ReactComponent as WBSunnyIcon } from './assets/svg/wb_sunny-24px.svg'
import { ReactComponent as WBSunnyDarkIcon } from './assets/svg/wb_sunny-dark-24px.svg'
import Themes from './models/themes'
import { Trashcan } from './components/trashcan/Trashcan'
import { SectionSettings } from './components/section-settings/SectionSettings'
import { Task } from './components/task/Task'

export const ThemeContext = React.createContext(Themes.LIGHT)

function App () {
  const [theme, setTheme] = useState(useContext(ThemeContext))
  const toggleTheme = () => {
    theme === Themes.DARK
      ? setTheme(Themes.LIGHT)
      : setTheme(Themes.DARK)
  }

  const history = useHistory()

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
          <div className="title"
               onClick={() => history.push('/')}>Delat<span>'</span></div>
          <div className="buttons">
            {
              theme === Themes.LIGHT
                ? <>
                  <DeleteIcon onClick={() => history.push('/trashcan')}/>
                  <WBSunnyIcon onClick={toggleTheme}/></>
                : <>
                  <DeleteDarkIcon onClick={() => history.push('/trashcan')}/>
                  <WBSunnyDarkIcon onClick={toggleTheme}/></>
            }

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
            <Route path="/section-settings">
              <SectionSettings/>
            </Route>
            <Route path="/task">
              <Task/>
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
