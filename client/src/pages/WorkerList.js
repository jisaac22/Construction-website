import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_WORKERS } from '../utils/queries';


const WorkerList = () => {
    const { loading, data } = useQuery(QUERY_WORKERS)
    const workers = data?.workers || [
      {
        "name": "Manny Lopez",
        "email": "manny@email.com",
        "password": "password01",
        "skills": ["Carpentry", "Dry Wall", "Paint"],
        "phoneNumber": "0123456789",
        "hourlyRate": "20"
      },
      {
        "name": "Michael Garcia",
        "email": "mike@email.com",
        "password": "password0123",
        "skills": ["Dry Wall", "Paint"],
        "phoneNumber": "1234567891",
        "hourlyRate": "15"
      },
      {
        "name": "John Martinez",
        "email": "johnny@email.com",
        "password": "password1234",
        "skills": ["Dry Wall", "Paint"],
        "phoneNumber": "2223334444",
        "hourlyRate": "18"
      },
      {
        "name": "Jose Chavez",
        "email": "jose@email.com",
        "password": "password01012",
        "skills": ["Roofing"],
        "phoneNumber": "1233215555",
        "hourlyRate": "20"
      },
      {
        "name": "Brian Harper",
        "email": "brian@email.com",
        "password": "password010234",
        "skills": ["Carpentry", "Roofing"],
        "phoneNumber": "5553332222",
        "hourlyRate": "23"
      },
      {
        "name": "Steven Almazan",
        "email": "steve@email.com",
        "password": "password010304",
        "skills": ["Paint", "Roofing", "Flooring"],
        "phoneNumber": "2223338888",
        "hourlyRate": "25"
      },
      {
        "name": "Jesse Rios",
        "email": "jesse@email.com",
        "password": "password010908",
        "skills": ["Carpentry", "Flooring"],
        "phoneNumber": "4443334444",
        "hourlyRate": "18"
      },
      {
        "name": "Raul Vela",
        "email": "raul@email.com",
        "password": "password010306",
        "skills": ["Carpentry", "Paint", "Dry Wall"],
        "phoneNumber": "9998882222",
        "hourlyRate": "19"
      }
    ];


  if (!workers.length) {
    console.log(workers)
    return <h3>No Workers Yet</h3>;
  }

  return (
    <div>
      <div className="workerContainer">
        {workers &&
          workers.map((worker) => (
            <div key={worker._id} className="col-12 col-xl-6">
              <div className="cardContainer">
                <Link to="/profile">
                <h4 className="workerName">
                  {worker.name} <br />
                </h4>
                </Link>
                <p className="workerEmail">Email: {worker.email}</p>
                <p className="workerSkills">List of skills: {worker.skills}</p>
                <p className="workerNumber">Ph# {worker.phoneNumber}</p>
                <p className="workerRate">${worker.hourlyRate}</p>
                <button className="hireBtn">HIRE!</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkerList;