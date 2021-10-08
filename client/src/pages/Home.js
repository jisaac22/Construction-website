import React from "react";
import {useQuery} from '@apollo/client'
import { QUERY_WORKERS } from '../utils/queries';
import WorkerList from "./WorkerList";

const Home = () => {
  const { loading, data } = useQuery(QUERY_WORKERS);
  const workers = data?.workers || [];

  return (
    <main>
      <div>
         {loading ? (
        <div>Loading...</div>
      ) : (
        <WorkerList
         workers={workers}/>
      )}
     </div> 
    </main>
  )
}

export default Home;

