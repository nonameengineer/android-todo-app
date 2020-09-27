import React from 'react'
import './TaskCard.scss'
import { ColorPicker } from '../color-picker/ColorPicker'
import { DateInput } from '../date-input/DateInput'

export const TaskCard: React.FC = () => (
  <>
    <div className="card">
      <div className="content">
        <div className="row header">
          <textarea placeholder="New..."/>
          <div
            className="color-picker-button">
            <ColorPicker/>
          </div>
        </div>
        <div className="row">
          <DateInput/>
          <img/>
        </div>
      </div>
      <div className="card__bottom">
        <img/>
        <img/>
      </div>
    </div>
  </>
)
