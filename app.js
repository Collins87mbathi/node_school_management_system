const bodyParser = require('body-parser');

require('dotenv').config();
let express = require('express'),
    app = express();
    jwt = require('jsonwebtoken'),
    passport = require('passport'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    path = require('path'),
    server = require('http').createServer(app),
    body = require('body-parser'),
    hbs = require('hbs'),
    io = require('socket.io').listen(server),
    url = require('url'); 
    
const client = require('mongodb').MongoClient;
const mongoUrl = "mongodb://localhost:27017/edu";

let mongoFix = { useUnifiedTopology: true };

let makeCollection = (coleName) => {
    client.connect(mongoUrl, mongoFix, (err, inst) => {
        if(err){
            console.log(err);
        } else {
            let dbo = inst.db('edu');
            dbo.createCollection(coleName, (err, res) => {
                if(err){
                    console.log(err);
                } else {
                    console.log(`we are good to go`);
                }
            })
        }
    });
}
 
// makeCollection('contact');


let insertData = (obj) => {
    client.connect(mongoUrl, mongoFix, (err, inst) => {
        if(err){
            console.log("Something wrong", err);
        } else {
            let dbo = inst.db('edu');
            dbo.collection('member').insertOne(obj, (err,res) => errorChecker(err, res));
        }
    })
}



let errorChecker = (err, inst) => {
    if(err){
        console.log("Something wrong", err);
    } else {
        console.log('Work Well', inst);
    }
} 

let guest = require('./routes/guest')(express);
let admin = require('./routes/admin')(express);

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hbs').__express);
app.set('view engine', 'html');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', guest);
app.use('/admin', admin);

app.post('/admin/auth/login', (req,res) => {
    let email = req.body.email;
    console.log(`${email}`);
})

server.listen(3000, (req,res) =>{
    console.log(`hhhh`);
});



