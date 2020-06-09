var express = require('express');
var router = express.Router();

var mysql = require('mysql');

// Connection 객체 생성
var connection = mysql.createConnection({
    host: '61.251.164.24',
    port: 3306,
    user: 'neo',
    password: 'neo!!!',
    database: 'TEST_DB'
});

// Connect
connection.connect(function (err) {
    if (err) {
        console.error('mysql connection error');
        console.error(err);
        throw err;
    }
});

// insert
router.post('/', function (req, res) {
    var user = {
        'userid': req.body.userid,
        'name': req.body.name,
        'address': req.body.address
    };
    var query = connection.query('insert into users set ?', user, function (err, result) {
        if (err) {
            console.error(err);
            throw err;
        }
        res.status(200).send('success');
    });
});

module.exports = router;