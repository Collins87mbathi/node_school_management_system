module.exports = (express) => {
    let route = express.Router();

    

    route.get('/admin', (req,res) => {
        res.render('admin');
    });

    route.get('/admin/auth/login', (req,res) => {
        res.send({data:'this is login'});
    });

    

    return route;
}