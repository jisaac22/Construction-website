const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Worker {
    _id: ID
    name: String
    email: String
    password: String
    skills: String
    phoneNumber: Number
    hourlyRate: Number
  }
  
  type Auth {
    token: ID!
    user: Worker
  }
  
  type Query {
    workers: [Worker]
    user(name: String!): Worker
    me: User
  }
  
  type Mutation {
    addWorker(name: String!, email: String!, password: String!, skills: String!, phoneNumber: Number!, hourlyRate: Number!): Worker
    login(email: String!, password: String!): Auth
    addSkill(profileId: ID!, skills: String!): Worker
  }
`;

module.exports = typeDefs;