import React from 'react';

// Import the `useParams()` hook
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
    <div className="my-3">
      <h3>{worker[0].name}</h3>
      <h3>{worker[0].email}</h3>
      <h3>{worker[0].skills}</h3>
      <h3>{worker[0].phoneNumber}</h3>
      <h3>{worker[0].houryRate}</h3>
      <h3>{worker[0]._id}</h3>
      <div className="bg-light py-4">
      </div>
    </div>
  );
};

export default SingleWorker;

