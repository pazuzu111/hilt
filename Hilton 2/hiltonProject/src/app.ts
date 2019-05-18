import { ApolloServer } from "apollo-server-express";
import express = require('express')
import { resolvers }  from "./resolvers/reservationResolver";
import { typeDefs }  from "./typeDefs/typeDefs";
import bodyParser from 'body-parser';
import cors from 'cors';

const port = process.env.PORT || 3000;

require('./db/index')

const app = express();

//middleware
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
    
const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.applyMiddleware({ app });

app.listen(port, () => console.log(`Example app listening on port ${port}!, mongoose:`))


