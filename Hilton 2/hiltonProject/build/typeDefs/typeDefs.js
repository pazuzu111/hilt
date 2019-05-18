"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const graphql_tools_1 = require("graphql-tools");
const reservationResolver_1 = require("../resolvers/reservationResolver");
exports.typeDefs = apollo_server_express_1.gql `

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
const schema = graphql_tools_1.makeExecutableSchema({ typeDefs: exports.typeDefs, resolvers: reservationResolver_1.resolvers });
exports.schema = schema;
//# sourceMappingURL=typeDefs.js.map