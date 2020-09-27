import React from 'react'
import './SectionSettings.scss'
import { SectionTitle } from '../../ui/section-title/SectionTitle'

export const SectionSettings = () => (
  <section>
    <SectionTitle title={'Title'}/>
    <div className="row">
      <h1>Maximum items</h1>
      <input placeholder="Day" type=" number"/>
    </div>
  </section>
);
