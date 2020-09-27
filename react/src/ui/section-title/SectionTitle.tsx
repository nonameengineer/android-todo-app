import React from 'react'
import './SectionTitle.scss'
import { useHistory } from 'react-router-dom'

type SectionTitleProps = {
  title: string;
  clickable?: boolean;
  onClick?: () => void;
}

export const SectionTitle = ({ title, clickable = true, onClick }: SectionTitleProps) => {
  const history = useHistory()

  return (
    <div
      onClick={() => history.push('/section-settings')}
      className={
        clickable
          ? 'section-title section-title--clickable'
          : 'section-title'
      }>
      {title}
    </div>
  )
}
