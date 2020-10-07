import React, { useContext } from 'react'
import './ColorPicker.scss'
import { Colors } from '../../models/colors'
import { ThemeContext } from '../../App'
import Themes from '../../models/themes'

type ColorPickerProps = {
  colorSelect: (color: string) => void
}
export const ColorPicker = ({colorSelect}: ColorPickerProps) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`color-picker ${theme === Themes.DARK ? 'dark' : null}`}>
      {
        Object.values(Colors).map((color: string, index: number) =>
          <div key={index}
               className='color'
               style={{backgroundColor: color}}
               onClick={(e) => colorSelect(color)} />)
      }
    </div>
  )
}
