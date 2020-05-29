module.exports = (express) => {
    let route = express.Router();

    route.get('/auth', (req,res) => {
        res.render('admin');
    });

    route.post('/auth/login', (req,res) => {
        res.render('login');
    });

    route.get('/auth/reset/:id', (req,res) => {
        res.send({data:'id'});
    });

    route.get('/course/add', (req,res) => {
        res.send({data:'chat'});
    });

    route.post('/course/add', (req,res) => {
        res.send({data:'chat add'});
    });

    

    return route;
}