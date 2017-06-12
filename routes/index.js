var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WebApp1' });
});

router.post('/ajax/demo', function(req, res) {
    var date =Date.now();
    console.log(date, " server accept: ", req.body.username, req.body.password);
    var data = {
        name: req.body.username ,
        id: req.body.password,
        server: "server1"
    };
    res.json(data);
})

module.exports = router;
