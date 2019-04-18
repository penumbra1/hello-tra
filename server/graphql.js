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
    title: String!
    id: String!
  }

  input EmailInput {
    name: String!
    phone: String
    email: String!
    city: CityInput!
    job: String!
    htmlComment: String
    textComment: String!
    attachment: Upload
  }
`;

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
      {
        emailData: {
          name,
          phone = "-",
          city,
          job,
          htmlComment,
          textComment,
          attachment
        }
      }
    ) => {
      const subject = `${name} - ${job} - ${city.title}`;
      const contacts = `Phone: ${phone}`;
      const htmlBody = htmlComment || `<p>${textComment}</p>`;
      const html = `${htmlBody}<p>${contacts}</p>`;
      const text = `${textComment}\n${contacts}`;

      await sendEmail({ subject, html, text, attachment });

      return `${subject} ${text}`;
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
};
