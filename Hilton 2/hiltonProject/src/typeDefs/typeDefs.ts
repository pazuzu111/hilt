import { gql } from "apollo-server-express";
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers }  from "../resolvers/reservationResolver";

export const typeDefs = gql`

    type Reservation {
        id: ID!
        name: String! 
        hotelName: String!
        arrivalDate: String!
        departureDate: String!
    }
    
    type Query {
        reservations: [Reservation!]!,
        reservation(id: ID!): Reservation
    }

    type Mutation {
        createReservation(
            name: String! 
            hotelName: String!
            arrivalDate: String!
            departureDate: String!        
        ): Reservation!
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema }