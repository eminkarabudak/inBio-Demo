import React from 'react'
import List from '..'
import listBoxData from "../../../assets/data/experienceListBox.json"
import ListBox from '../../boxes/listBox';

import './experience-list.scss';

const ExperienceList = () => {
  return (
    <div className='experience-list'>
      <List title='Education Quality' subtitle='2007 - 2010' >
        <ListBox data={listBoxData} />
      </List>
      <List title='Job Experience' subtitle='2007 - 2010' >
        <ListBox data={listBoxData} />
      </List>
    </div>
  )
}

export default ExperienceList