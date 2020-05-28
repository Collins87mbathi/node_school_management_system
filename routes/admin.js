module.exports = (express) => {
    let route = express.Router();

    

    route.get('/auth', (req,res) => {
        res.render('admin');
    });

    route.get('/auth/login', (req,res) => {
        res.send({data:'this is login'});
    });

    route.post('/auth/login', (req,res) => {
        res.send({data:'this is post login'});
    });

    route.get('/auth/reset/:id', (req,res) => {
        res.send({data:'this is login'});
    });

    route.get('/course/add', (req,res) => {
        res.send({data:'this is login'});
    });

    route.post('/course/add', (req,res) => {
        res.send({data:'this is login'});
    });

    

    return route;
}