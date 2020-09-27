import React, { MutableRefObject, RefCallback } from 'react'
import './ColorPicker.scss'
import { Colors } from '../../models/colors'

type ColorPickerProps = {
  ref: any
}

export const ColorPicker = ({ref}: ColorPickerProps) => (
  <div className="color-picker">
    {
      Object.keys(Colors).map((color, index) =>
        <div key={index} className={`color color--${color.toLowerCase()}`}/>)
    }
  </div>
)
