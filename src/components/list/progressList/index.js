import React from 'react'
import List from '..';
import progressData from '../../../assets/data/progressListData.json';
import ProgressBar from '../../progressBar';
import './progress-list.scss';

const ProgressList = () => {
  return (
    <div className='progress-list'>
      <List title='Design Skill' subtitle='Features' >
        {progressData.map((item, index) => {
          return (
            <ProgressBar key={index} value={item.value} title={item.title} />
          )
        })}
      </List>
      <List title='Development Skill' subtitle='Features' >
        {progressData.map((item, index) => {
          return (
            <ProgressBar key={index} value={item.value} title={item.title} />
          )
        })}
      </List>
    </div>
  )
}

export default ProgressList