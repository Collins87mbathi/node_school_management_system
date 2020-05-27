module.exports = (express) => {
    let route = express.Router();

    route.get('/', (req,res) =>{
        res.send('Hello World');
    });

    route.get('/admin', (req,res) => {
        res.send('hello admin');
    });

    route.get('/admin/auth/login', (req,res) => {
        res.send({data:'this is login'});
    });

    return route;
}