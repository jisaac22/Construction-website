import { gql } from '@apollo/client';

export const QUERY_WORKERS = gql`
  query allWorkers {
    workers {
      _id
      name
      email
      skills
      phoneNumber
      hourlyRate
    }
  }  
`;

export const QUERY_SINGLE_WORKER = gql`
  query singleWorker($workerId: ID!) {
    workers (workerId: $workerId){
      _id
      name
      email
      skills
      phoneNumber
      hourlyRate
    }
  }
`;

export const QUERY_ME = gql`
 query me {
   me {
     _id
     name
     email
     skills
     phoneNumber
     hourlyRate
   }
 }
`