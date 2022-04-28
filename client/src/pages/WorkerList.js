import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_WORKERS } from '../utils/queries';
import avatar1 from '../photos/avatar1.jpg'


const WorkerList = () => {
    const { loading, data } = useQuery(QUERY_WORKERS)
    const workers = data?.workers || [];
    console.log(data)


  if (!workers.length) {
    console.log(workers)
    return <h3>No Workers Yet</h3>;
  }

  return (
    <div className='workContainer'>
       {workers.map((worker) => (
            <div key={worker._id} className="cardContainer">
              <Link className="workerName" to={{ pathname: `/profile/${worker._id}` }}>
                <h4 className="workerName">
                  {worker.name} <br />
                </h4>
              </Link>
              <img className='avatar' src={avatar1}></img>
              <p className="worker">List of skills: {worker.skills[0]}, {worker.skills[1]}</p>
              </div>
        ))}
    </div>
  );
};

export default WorkerList;