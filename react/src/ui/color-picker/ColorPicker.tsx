import React from 'react'
import './ColorPicker.scss'
import { Colors } from '../../models/colors'

export const ColorPicker = () => (
  <div className="color-picker">
    {Object.keys(Colors).
      map(color => <div className={`color color--${color.toLowerCase()}`}></div>)}
  </div>
)
