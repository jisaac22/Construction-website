import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_WORKERS } from '../utils/queries';


const WorkerList = () => {
    const { loading, data } = useQuery(QUERY_WORKERS)
    const workers = data?.workers || [];
    console.log(data)


  if (!workers.length) {
    console.log(workers)
    return <h3>No Workers Yet</h3>;
  }

  return (
    <div>
      <div className="workerContainer">
        {workers.map((worker) => (
            <div key={worker._id} className="cardContainer">
              <Link to={{ pathname: `/profile/${worker._id}` }}>
                <h4 className="workerName">
                  {worker.name} <br />
                </h4>
              </Link>
                <p className="worker">Email: {worker.email}</p>
                <p className="worker">List of skills: {worker.skills}</p>
                <p className="worker">Ph# {worker.phoneNumber}</p>
                <p className="worker">${worker.hourlyRate}</p>
                <button className="hireBtn">HIRE!</button>
              </div>
          ))}
      </div>
    </div>
  );
};

export default WorkerList;