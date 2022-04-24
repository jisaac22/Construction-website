import { gql } from '@apollo/client';

export const QUERY_WORKERS = gql`
  query Workers {
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
  query singleWorker($_id: String) {
    singleWorker(_id: $_id){
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