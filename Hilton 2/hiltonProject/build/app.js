"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express = require("express");
const reservationResolver_1 = require("./resolvers/reservationResolver");
const typeDefs_1 = require("./typeDefs/typeDefs");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const port = process.env.PORT || 3000;
require('./db/index');
const app = express();
//middleware
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: typeDefs_1.typeDefs,
    resolvers: reservationResolver_1.resolvers
});
server.applyMiddleware({ app });
app.listen(port, () => console.log(`Example app listening on port ${port}!, mongoose:`));
//# sourceMappingURL=app.js.map