import gql from 'graphql-tag';

export const reservationsQuery = gql`
  query {
    reservations
    {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

export const reservationQuery = gql`
  query ($id: ID!) {
    reservation(id: $id) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

export const reservationMutation = gql`
  mutation ($name: String!, $hotelName: String!, $arrivalDate: String!, $departureDate: String!) {
    createReservation(name: $name, hotelName: $hotelName, arrivalDate: $arrivalDate, departureDate: $departureDate) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

