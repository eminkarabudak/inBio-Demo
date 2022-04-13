import React from 'react'
import FeaturesBox from '../../components/boxes/featuresBox';
import data from '../../assets/data/featuresBox.json';

import "./features.scss";
import Title from '../../components/title';

const Features = () => {

  return (
    <div className='features section'>
      <div className="features__top">
        <Title subtitle={"FEATURES"} title={"What I Do"} />
      </div>
      <div className="features__bottom">
        <FeaturesBox data={data} />
      </div>
    </div>
  )
}

export default Features