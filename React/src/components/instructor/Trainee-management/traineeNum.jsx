import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {UsersIcon} from '@heroicons/react/24/outline'
import Cookie from "universal-cookie";

const TraineeNum = () => {

  const cookie = new Cookie()
  const [totalTrainees, setTotalTrainees] = useState(0);

  const getUserIdFromCookie = () => {
    const authCookie = cookie.get('auth');
    if (authCookie && authCookie.userId) {
      return authCookie.userId;
    }
    return null;
  };

  const getTotalTrainees = async () => {
    const userId = getUserIdFromCookie();
    try {
      const { data } = await axios.get("http://localhost:3000/user/getTotalTrainees",{
        params: {
          instructorId: userId
        }
    });

      if (data.response) {
        setTotalTrainees(data.response.totalTrainees);
      }
    } catch (error) {
      console.error("Error fetching total trainees:", error);
    }
  };
  

  useEffect(() => {
    void getTotalTrainees();
  }, []);

  return (
    <>
    <div className="ml-4 w-1/4 p-4 mx-auto my-6 bg-white border border-blue-300 border-2 rounded-lg shadow-md mr-10">
      <div className="text-center">
      <div className='flex'>
      <UsersIcon className='text-blue-700 ml-6' style={{ width: '40px', height: '40px' }} />
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Trainees</h2>
        </div>
        <div className="bg-blue-200 p-6 rounded-lg"> 
          <p className="text-lg font-medium text-gray-800">Total Trainees: {totalTrainees}</p>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default TraineeNum;