import React from 'react';
import { useState } from 'react';
import './style.scss';

const SwitchTabs = ({ data, onTabChange }) => {
  
  const [left, setLeft] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100); //as the width of the active tab is 100px in css file so from this set state the movingbg span will be changing its position.
    setTimeout(() => {
      setSelectedTab(index);// this is simply for the transition effect and setting the css for the active tab.
    }, 300);
    onTabChange(tab, index);//from here the following selected tab will be passed to the func, letting the parent know about the choosen tab

  } 


  return (
    <div className='switchingTabs'>
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className='movingBg' style={{ left }} />
      </div>
    </div>
  )
}

export default SwitchTabs