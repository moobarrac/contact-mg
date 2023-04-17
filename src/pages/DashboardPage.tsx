// Importing required modules and hooks
import React, { useState } from 'react';
import LineGraph from '../components/LineGraph';
import Map from '../components/Map';

const DashboardPage = () => {
  //state to value for switching tabs
  const [activeTab, setActiveTab] = useState('line-graph');

  // Function to handle click on tabs
  const handleClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  // Rendering the JSX
  return (
    <div className="flex-1 h-full">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
              </div>
              <div className="block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <button className={activeTab === 'line-graph' ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"} onClick={() => handleClick('line-graph')}>
                    Line Graph
                  </button>

                  <p className={activeTab === 'map' ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"} onClick={() => handleClick('map')}>
                    Map
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className='pt-10'>
      {activeTab === 'line-graph' ? <LineGraph /> : <Map />}
      </div>
    </div>
  );
};

export default DashboardPage;  // export DashboardPage component for use in other parts of the application as default
