const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const dbconnect = require('./config/db')
const port = process.env.PORT || 8000;

dbconnect()


const app = express();


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log("server running on port : " + port))