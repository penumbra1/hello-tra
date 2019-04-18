import gql from "graphql-tag";

export const GET_CITIES = gql`
  query getCities {
    cities {
      title
      id
    }
  }
`;

export const GET_JOBS = gql`
  query getJobs($city: CityInput!) {
    jobs(city: $city)
  }
`;

export const SEND_EMAIL = gql`
  mutation send($emailData: EmailInput!) {
    send(emailData: $emailData)
  }
`;
