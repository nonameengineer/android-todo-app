import React, { useContext } from 'react'
import './SectionTitle.scss'
import { useHistory } from 'react-router-dom'
import { ThemeContext } from '../../App'
import Themes from '../../models/themes'

type SectionTitleProps = {
  title: string;
  clickable?: boolean;
  onClick?: () => void;
}

export const SectionTitle = ({ title, clickable = true, onClick }: SectionTitleProps) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      onClick={onClick}
      className={`
        ${clickable ? 'section-title section-title--clickable' : 'section-title'}
        ${theme === Themes.DARK ? 'dark' : null}
      `}>
      {title}
    </div>
  )
}
