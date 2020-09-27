import React from 'react'
import './TaskCard.scss'

export const TaskCard = () => (
  <>
    <div class="card">
      <div class="content">
        <div class="row header">
        <textarea
          type="text"
          placeholder="New..."></textarea>
          <div
            class="color-picker-button">
            <app-color-picker class="color-picker"/>
          </div>
        </div>
        <div class="row">
          <app-date-input/>
          <img/>
        </div>
      </div>
      <div class="card__bottom">
        <img/>
        <img/>
      </div>
    </div>
  </>
)
