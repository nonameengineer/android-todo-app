import React from 'react'
import './SectionTitle.scss'

export const SectionTitle = ({ title, clickable = true }) => (
  <div className={clickable
    ? 'section-title section-title--clickable'
    : 'section-title'}>{ title }</div>
)
