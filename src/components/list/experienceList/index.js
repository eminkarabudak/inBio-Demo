import React from 'react'
import List from '..'
import listBoxData from "../../../assets/data/experienceListBox.json"
import ListBox from '../../boxes/listBox';

import './experience-list.scss';

const ExperienceList = () => {

  const data = [
    {
      title: 'Education Quality',
      subtitle: '2007 - 2010'
    },
    {
      title: 'Job Experience',
      subtitle: '2007 - 2010'
    },
  ]

  return (
    <div className='experience-list'>
      {
        data.map((item, index) => {
          return (
            <List key={index} title={item.title} subtitle={item.subtitle} >
              <ListBox data={listBoxData} />
            </List>
          )
        })
      }

    </div>
  )
}

export default ExperienceList