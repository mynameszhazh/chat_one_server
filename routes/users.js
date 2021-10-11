var express = require('express');
var router = express.Router();

// 这里进行一个联系数据库简直就是完美的地方不是吗?
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/daa', function(req, res, next) {
  res.send('respond with a daa');
});

module.exports = router;
