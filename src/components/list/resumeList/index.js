import React from 'react'
import List from '..'
import listBoxData from "../../../assets/data/resumeListBox.json"

import './resume-list.scss';

const ResumeList = () => {
  return (
    <div className='resume-list'>
      <List boxData={listBoxData} title='Education Quality' subtitle='2007 - 2010' />
      <List boxData={listBoxData} title='Job Experience' subtitle='2007 - 2010' />
    </div>
  )
}

export default ResumeList