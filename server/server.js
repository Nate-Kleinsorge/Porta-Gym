import http from 'http';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4'
import typeDefs from './schemas/typeDefs';
import resolvers from './schemas/resolvers';

const app = express();
const httpServer = http.createServer(app);

const PORT = 3001
const MONGODB_URI = "monogdb://127.0.0.1:27017/Porta-Gym";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: []
})

await mongoose.connect(MONGODB_URI);
await server.start();

app.use('/graphql', express.json(), expressMiddleware(server));

httpServer.listen({ port: PORT }, () => {console.log(`app running on port ${PORT}`)});