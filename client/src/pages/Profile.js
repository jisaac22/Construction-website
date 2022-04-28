import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { QUERY_SINGLE_WORKER } from '../utils/queries';

const SingleWorker = () => {
  let { id } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_WORKER, {

    variables: { _id: id },
  });

  const worker = data?.singleWorker || [];
  console.log(worker)

  if (loading) {
    return <div>
      <h2>HI</h2>
    </div>;
  }
  return (
  <div className='profileBody'> 
    <div className="singleWorker">
      <h3>Name</h3>
      <p>{worker[0].name}</p>
      <h3>Contact Info</h3>
      <p>Email: {worker[0].email}</p>
      <p>Phone: #{worker[0].phoneNumber}</p>
      <h3>Skills</h3>
      <p>{worker[0].skills[0]}, {worker[0].skills[1]}, {worker[0].skills[2]} </p>
      <h3>Cost</h3>
      <p>$:{worker[0].hourlyRate}</p>
      <button className='hireBtn'>HIRE</button>
    </div>
  </div> 
  );
};

export default SingleWorker;

