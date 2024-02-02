import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {CommandLineIcon} from '@heroicons/react/24/outline'

const ProjectNum = () => {
  const [totalProjects, setTotalProjects] = useState(0);

  const getTotalProjects = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/project/getTotalProjects");
      if (data.response) {
        setTotalProjects(data.response);
      }
    } catch (error) {
      console.error("Error fetching total trainees:", error);
    }
  };
  

  useEffect(() => {
    void getTotalProjects();
  }, []);

  return (
    <>
    <div className="ml-15 w-1/4 p-4 mx-auto my-6 bg-white border border-blue-300 border-2 rounded-lg shadow-md mr-10">
      <div className="text-center">
      <div className='flex'>
      <CommandLineIcon className='text-blue-700 ml-1' style={{ width: '40px', height: '40px' }} />
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Project List</h2>
        </div>
        <div className="bg-blue-200 p-6 rounded-lg">
          {/* Set the size of the icon here */}
          {/* Rest of your content */}
          <p className="text-lg font-medium text-gray-800">Total Projects: {totalProjects}</p>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default ProjectNum;