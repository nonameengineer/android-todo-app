import React from 'react'
import './SectionTitle.scss'

type SectionTitleProps = {
  title: string;
  clickable?: boolean
}

export const SectionTitle = ({ title, clickable  = true }: SectionTitleProps) => (
  <div className={clickable
    ? 'section-title section-title--clickable'
    : 'section-title'}>{ title }</div>
)
