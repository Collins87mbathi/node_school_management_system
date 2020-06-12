module.exports = (express) => {
    let route = express.Router();

    route.get('/auth', (req,res) => {
        res.render('admin');
    });

    route.get('/auth/login', (req,res) => {
        res.render('login');
    });

    route.post('/auth/login', (req,res) => {
        let mail = req.body.email;
        let password = req.body.password;
        res.send(`this is email : ${mail} & this is password : ${password}`);
    });

    route.get('/auth/reset/:id', (req,res) => {
        let val = req.params.id;
        res.send(val);
    });

    route.get('/course/add', (req,res) => {
        res.send({data:'chat'});
    });

    route.post('/course/add', (req,res) => {
        res.send({data:'chat add'});
    });
    return route;
}