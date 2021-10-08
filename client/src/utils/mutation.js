import { gql } from '@apollo/client';

export const ADD_WORKER = gql`
  mutation addWorker($name: String!, $email: String!, $password: String!, $skills: String!, $phoneNumber: Number!, $hourlyRate: Number!) {
    addWorker(name: $name, email: $email, password: $password, skills: $skills, phoneNumber: $phoneNumber, hourlyRate: $hourlyRate){
      token
      workers {
        _id
        name
        email
        skills
        phoneNumber
        hourlyRate
      }
    }
  }
`;

export const LOGIN_WORKER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password){
      token
      workers {
        _id
        name
        email
        skills
        phoneNumber
        hourlyRate
      }
    }
  }
`

export const ADD_SKILL = gql`
  mutation addSkill($workerId, ID!, $skills: String!) {
    addSkill(workerId: $workerId, skills: $skills) {
      _id
      name
      skills
    }
  }
`;


