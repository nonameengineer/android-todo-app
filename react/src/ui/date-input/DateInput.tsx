import React from 'react'
import './DateInput.scss'

export const DateInput = () => (
  <div className="date-input">
    <input placeholder="Day" type="number"/>
    <input placeholder="Month" type="number"/>
    <input placeholder="Year" type="number"/>
  </div>
)
