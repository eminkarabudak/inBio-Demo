import React from 'react'
import ExperienceList from '../../components/list/experienceList';
import ProgressList from '../../components/list/progressList';
import Tab from '../../components/tab';
import Title from '../../components/title';

import './resume.scss';

const Resume = () => {


  const tabData = [
    {
      title: "Education",
      content: <ExperienceList />
    },
    {
      title: "Professional Skills",
      content: <ProgressList />
    },
    {
      title: "Experience",
      content: <ExperienceList />
    },
    {
      title: "Interview",
      content: <ExperienceList />
    }
  ]
  return (
    <div className='resume section'>
      <div className="resume__top">
        <Title title='My Resume' subtitle='7+ YEARS OF EXPERIENCE' />
      </div>
      <div className="resume__bottom">
        <Tab active={0}>
          {tabData.map((item, index) => {
            return (
              <Tab.TabPane key={index} tab={item.title} >
                {item.content}
              </Tab.TabPane>
            )
          })}
        </Tab>
      </div>
    </div>
  )
}

export default Resume