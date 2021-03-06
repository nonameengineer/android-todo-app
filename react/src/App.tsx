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
import { Task } from './components/task/Task'
import { ThemeStorageService } from './services/theme-storage/theme-storage.service'

// By default is light theme
export const ThemeContext = React.createContext(Themes.LIGHT)

function App () {
  const themeStorage = new ThemeStorageService();

  const history = useHistory()

  const [theme, setTheme] = useState(useContext(ThemeContext))
  const toggleTheme = () => {
    if (theme === Themes.DARK) {
      setTheme(Themes.LIGHT)
      themeStorage.saveIsDarkTheme(false)
    } else {
      setTheme(Themes.DARK)
      themeStorage.saveIsDarkTheme(true)
    }
  }

  useEffect(() => {
    themeStorage.getIsDarkTheme()
      ? setTheme(Themes.DARK)
      : setTheme(Themes.LIGHT);
  }, [])

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
            <Route path="/task">
              <Task/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </main>
      </div>
      <footer>
        <div className="wrapper">
          <a href="https://github.com/SoneSoftware">
            <svg width="64" height="32" viewBox="0 0 400 144" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M76.489 104.824C76.489 99.8823 74.7295 96.0321 71.2106 93.2727C67.7556 90.5134 61.6455 87.6578 52.8801 84.7059C44.1147 81.754 36.9489 78.8984 31.3826 76.139C13.276 67.2192 4.22273 54.9626 4.22273 39.369C4.22273 31.6043 6.46206 24.7701 10.9407 18.8663C15.4833 12.8984 21.8814 8.27807 30.1349 5.00535C38.3885 1.66845 47.6657 0 57.9666 0C68.0115 0 77.0008 1.79679 84.9345 5.39037C92.9321 8.98396 99.1382 14.1176 103.553 20.7914C107.968 27.4011 110.175 34.9733 110.175 43.508H76.585C76.585 37.7968 74.8255 33.369 71.3066 30.2246C67.8516 27.0802 63.149 25.508 57.1988 25.508C51.1846 25.508 46.418 26.8556 42.8991 29.5508C39.4441 32.1818 37.7167 35.5508 37.7167 39.6578C37.7167 43.2513 39.6361 46.5241 43.4749 49.4759C47.3138 52.3636 54.0637 55.3797 63.7248 58.5241C73.3859 61.6043 81.3195 64.9412 87.5257 68.5348C102.625 77.262 110.175 89.2941 110.175 104.631C110.175 116.888 105.568 126.513 96.355 133.508C87.1418 140.503 74.5056 144 58.4464 144C47.1218 144 36.8529 141.979 27.6397 137.936C18.4904 133.829 11.5805 128.246 6.90992 121.187C2.30331 114.064 0 105.882 0 96.6417H33.7818C33.7818 104.15 35.7013 109.701 39.5401 113.294C43.4429 116.824 49.745 118.588 58.4464 118.588C64.0127 118.588 68.3954 117.401 71.5945 115.027C74.8575 112.588 76.489 109.187 76.489 104.824Z"
                fill="white"/>
              <path
                d="M108.125 89.0374C108.125 78.6417 110.14 69.4011 114.171 61.3155C118.202 53.1658 123.992 46.9091 131.542 42.5455C139.092 38.1818 147.953 36 158.126 36C173.673 36 185.926 40.8449 194.883 50.5348C203.84 60.1604 208.319 73.2834 208.319 89.9037V91.0588C208.319 107.294 203.808 120.193 194.787 129.754C185.83 139.251 173.673 144 158.318 144C143.538 144 131.67 139.572 122.713 130.717C113.755 121.797 108.925 109.733 108.221 94.5241L108.125 89.0374ZM140.467 91.0588C140.467 100.684 141.971 107.743 144.978 112.235C147.985 116.727 152.432 118.973 158.318 118.973C169.834 118.973 175.721 110.086 175.977 92.3102V89.0374C175.977 70.3636 170.026 61.0267 158.126 61.0267C147.313 61.0267 141.459 69.0802 140.563 85.1872L140.467 91.0588Z"
                fill="white"/>
              <path
                d="M238.515 37.9251L239.571 50.1497C246.737 40.7166 256.622 36 269.226 36C280.039 36 288.1 39.2406 293.411 45.7219C298.785 52.2032 301.568 61.9572 301.76 74.984V142.075H269.322V76.3315C269.322 71.0695 268.266 67.2192 266.155 64.7807C264.043 62.2781 260.205 61.0267 254.638 61.0267C248.304 61.0267 243.602 63.5294 240.531 68.5348V142.075H208.188V37.9251H238.515Z"
                fill="white"/>
              <path
                d="M356.237 144C340.306 144 327.414 139.251 317.561 129.754C307.708 120.193 302.781 107.775 302.781 92.5027V89.8075C302.781 79.1551 304.733 69.754 308.635 61.6043C312.602 53.4545 318.361 47.1658 325.91 42.738C333.46 38.246 342.417 36 352.782 36C367.37 36 378.886 40.5561 387.332 49.6684C395.777 58.7166 400 71.3583 400 87.5936V100.203H335.699C336.851 106.043 339.378 110.631 343.281 113.968C347.184 117.305 352.238 118.973 358.445 118.973C368.681 118.973 376.679 115.38 382.437 108.193L397.217 125.711C393.186 131.294 387.46 135.754 380.038 139.091C372.68 142.364 364.747 144 356.237 144ZM352.59 61.0267C343.121 61.0267 337.491 67.3155 335.699 79.893H368.33V77.3904C368.458 72.1925 367.146 68.1818 364.395 65.3583C361.644 62.4706 357.709 61.0267 352.59 61.0267Z"
                fill="white"/>
            </svg>
          </a>
          <a href="https://github.com/nonameengineer">
            <div className="copyright">Copyright © 2020 Ruslan Usmanov. All
              rights reserved.
            </div>
          </a>
        </div>
      </footer>
    </ThemeContext.Provider>
  )
}

export default App
