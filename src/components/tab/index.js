import React, { useEffect, useState, Children, isValidElement } from "react";
import classNames from 'classnames'

import './tab.scss';

const Tab = (props, { active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);
  const { children, className, column, sticky } = props
  useEffect(() => {
    let data = [];

    Children.forEach(children, (element) => {
      if (!isValidElement(element)) return;

      const {
        props: { tab, children },
      } = element;
      data.push({ tab, children });
    });
    setTabsData(data);



  }, [children, active]);




  const onHandle = (e, index) => {
    e.preventDefault()
    setActiveTab(index)
  }

  return (
    <div className={classNames('tab', { 'tab--column': column })}>
      <ul className={classNames('tab__list', { 'tab--sticky': sticky })}>
        {tabsData.map(({ tab }, index) => (
          <li key={index} className="tab__item">
            <a
              className={classNames('tab__link', { 'tab__link--active': index === activeTab })}
              href="#"
              onClick={(e) => onHandle(e, index)}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>

      <div className={classNames('tab__content', className)}>
        {
          tabsData[activeTab] && tabsData[activeTab].children
        }
      </div>
    </div>
  );
};

const TabPane = ({ children }) => {
  return {

    children
  };
};

Tab.TabPane = TabPane;

export default Tab;