const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Worker {
    _id: ID
    name: String
    email: String
    password: String
    skills: String
    phoneNumber: Int
    hourlyRate: Int
  }
  
  type Auth {
    token: ID!
    user: Worker
  }
  
  type Query {
    workers: [Worker]
    user(name: String!): Worker
    me: Worker
  }
  
  type Mutation {
    addWorker(name: String!, email: String!, password: String!, skills: String!, phoneNumber: Int!, hourlyRate: Int!): Worker
    login(email: String!, password: String!): Auth
    addSkill(profileId: ID!, skills: String!): Worker
  }
`;

module.exports = typeDefs;