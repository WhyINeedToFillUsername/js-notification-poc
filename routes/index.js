var express = require('express');
const path = require('path');
var router = express.Router();

var app = express();
app.set('html', path.join(__dirname, '../public/html'));

// return static html
router.get('/', function (req, res, next) {
    res.sendFile('notification.html', {root: app.get('html')});
});

module.exports = router;
