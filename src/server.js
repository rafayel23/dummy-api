const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('../config.json');
const userRoutes = require('./user.routes');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_URI || config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log('Successfully connected to the database');    
}).catch(err => {
    console.log('Could not connect to the database.', err);
    process.exit();
});

const server = express();
const port = process.env.PORT || config.PORT;

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({
  extended: true
}));

server.get('/', (req, res) => {
    res.send('UP & RUN dummy API home');
});

server.use('/api/users', userRoutes)

server.listen(port, () => {
    console.log(`UP & RUN dummy API server is up and running on port ${port}`);
});