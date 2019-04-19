const { gql } = require("apollo-server-express");

module.exports = gql`
  type Query {
    hello: String
    cities: [City]!
    jobs(city: CityInput!): [String]!
  }

  type Mutation {
    send(emailData: EmailInput!): String
  }

  type City {
    title: String!
    id: String!
  }

  input CityInput {
    title: String!
    id: String!
  }

  input EmailInput {
    name: String!
    email: String!
    phone: String
    city: CityInput!
    job: String!
    htmlComment: String
    textComment: String
    attachment: Upload
  }
`;
