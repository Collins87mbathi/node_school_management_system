require('dotenv').config();
let express = require('express'),
    app = express();
    jwt = require('jsonwebtoken'),
    passport = require('passport'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    path = require('path'),
    server = require('http').createServer(app),
    bodyParser = require('body-parser'),
    io = require('socket.io').listen(server);

let router = require('./routes/guest')(express);

app.use('/', router);

server.listen(3000, () =>{
    console.log(`server is running at ${process.env.PORT}`);
});



