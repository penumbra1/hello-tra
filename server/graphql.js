const { gql } = require("apollo-server-express");
const dataProvider = require("./mockDataProvider");
const sendEmail = require("./mailer");

const typeDefs = gql`
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
    id: String!
  }

  input EmailInput {
    name: String!
    phone: String
    city: CityInput!
    job: String!
    html: String
    plainText: String!
    attachment: Upload
  }
`;

const testFile = {
  filename: "CV.pdf",
  path: "./test.pdf"
};

const resolvers = {
  Query: {
    hello: async () => {
      await sendEmail();
      return "Hello world!";
    },
    cities: () => dataProvider.getCities(),
    jobs: (_, { city }) => dataProvider.getJobOpenings(city)
  },
  Mutation: {
    send: async (
      _,
      { emailData: { name, job, html, plainText, attachment = testFile } }
    ) => {
      const subject = `${name} - ${job}`;
      await sendEmail({ subject, html, plainText, attachment });
      return `${subject} ${plainText}`;
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
};
