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
    hbs = require('hbs'),
    io = require('socket.io').listen(server);

let guest = require('./routes/guest')(express);
let admin = require('./routes/admin')(express);

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hbs').__express);
app.set('view engine', 'html');
hbs.registerPartials(path.join(__dirname, 'views/partials'));


app.use('/', guest);
app.use('/admin', admin);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

server.listen(3000, () =>{
    console.log(`server is running at ${process.env.PORT}`);
});



