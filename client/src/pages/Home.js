import React from 'react';
import { Link } from 'react-router-dom';
import {useQuery} from '@apollo/client'
import { QUERY_WORKERS } from '../utils/queries';


const Home = () => {
  return (
    <div className='container2'>
      <div className="info">
        <p>If you are looking for someone to come and make quick fixes around the house you've come to the right spot. If 
          you are a construction worker trying to put your name out there and get new jobs, this is the place for you. If you 
          are looking for someone to hire click the 'Looking to hire' button and you'll be presented with a list of workers.
          If you want to become a worker click 'Become part of the team' and fill out the form.
        </p>
      </div>
      <div className="team">
      <Link className="hire btn" to="/workerlist">
        Looking to Hire?
       </Link>
      <Link className="part btn" to="/signup">
        Become part of the team?
      </Link>
     </div> 
    </div>
  )
}

export default Home;

