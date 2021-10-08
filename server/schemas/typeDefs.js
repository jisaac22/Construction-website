const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Worker {
    _id: ID
    name: String
    username: String
    email: String
    password: String
    skills: String
    phoneNumber: Number
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
    addWorker(name: String!, username: String!, email: String!, password: String!, skills: String!, phoneNumber: Number!): Worker
    addSkill(profileId: ID!, skills: String!): Worker
  }
`;

module.exports = typeDefs;