import React from 'react'
import List from '..';
import progressData from '../../../assets/data/progressListData.json';
import ProgressBar from '../../progressBar';

import './progress-list.scss';

const ProgressList = () => {

  const data = [
    {
      title: 'Design Skill',
      subtitle: 'Features'
    },
    {
      title: 'Development Skill',
      subtitle: 'Features'
    },
  ]

  return (
    <div className='progress-list'>
      {data.map((item, index) => {
        return (
          <List key={index} title={item.title} subtitle={item.subtitle} >
            {progressData.map((item, index) => {
              return (
                <ProgressBar key={index} value={item.value} title={item.title} />
              )
            })}
          </List>
        )
      })}
    </div>
  )
}

export default ProgressList