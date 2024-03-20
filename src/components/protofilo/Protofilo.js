// RecentWork.js

import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../protofilo/Protofilo.css'

const RecentWork = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const categories = ['All', 'Web Design', 'Mobile App', 'Marketing'];

  const dummyData = [
    { id: 1, category: 'Web Design', title: 'web applicaton', image: 'https://cdn.pixabay.com/photo/2017/09/05/10/19/business-2717063_1280.jpg' },
    { id: 2, category: 'Marketing', title: 'Social Media', image: 'https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_1280.jpg' },
    { id: 3, category: 'Mobile App', title: 'mobile app', image: 'https://cdn.pixabay.com/photo/2015/02/05/08/12/stock-624712_1280.jpg' },
    { id: 4, category: 'Mobile App', title: 'mobile app', image: 'https://cdn.pixabay.com/photo/2015/05/28/14/38/ux-787980_1280.jpg' },
    { id: 5, category: 'Mobile App', title: 'mobile app', image: 'https://cdn.pixabay.com/photo/2017/10/05/14/43/register-2819608_1280.jpg' },
    { id: 6, category: 'Web Design', title: 'web app', image: 'https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg' },
    // Add more dummy data as needed
  ];

  const filteredData =
    activeTab === 0 ? dummyData : dummyData.filter((item) => item.category === categories[activeTab]);

  return (
    <div>
        
        <div className="my-5">
      <h1 className="text-center text-3xl font-bold p-2 text-purple-800">Recent Works</h1>
    </div>

      <div className='flex justify-center'>
      <div className='px-20'>
      <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
        <TabList className="flex justify-center items-center gap-4 cursor-pointer text-xl font-bold text-sky-800">
          {categories.map((category, index) => (
            <Tab key={index}>{category}</Tab>
          ))}
        </TabList>

        {categories.map((category, index) => (
          <TabPanel key={index}>
            <div className="project-list">
              {filteredData.map((project) => (
                <div key={project.id} className="project-item">
                  <img src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
      </div>
      </div>
    </div>
  );
};

export default RecentWork;
