import React, { useContext } from 'react'
import './ColorPicker.scss'
import { Colors } from '../../models/colors'
import { ThemeContext } from '../../App'
import Themes from '../../models/themes'

type ColorPickerProps = {
  ref: any
}
export const ColorPicker = ({ref}: ColorPickerProps) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`color-picker ${theme === Themes.DARK ? 'dark' : null}`}>
      {
        Object.keys(Colors).map((color, index) =>
          <div key={index} className={`color color--${color.toLowerCase()}`}/>)
      }
    </div>
  )
}
