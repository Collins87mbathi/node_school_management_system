module.exports = (express) => {
    let route = express.Router();

    route.get('/', (req,res) =>{
        res.send('Hello this is home');
    });

    route.get('/course', (req,res) => {
        res.send('hello this is courses');
    });

    route.get('/course/cat', (req,res) => {
        res.send('hello this is course cat')
    });

    route.get('/coruse/:id', (req,res)=>{
        res.send('hello this is course cat');
    });

    route.get('/');


    return route;
}