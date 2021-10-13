const express = require('express');
const router = express.Router();
// 这里获取的就是userList
const { userList } = require('../utils/mongodb/chat')


// 这里进行一个联系数据库简直就是完美的地方不是吗?
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/daa', function(req, res, next) {
  res.send('respond with a daa');
});

router.get('/list', function(req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  res.append('Access-Control-Allow-Content-Type', '*')
  // 查询所有
  userList.find(function(err,ret) {
      if(err) {
          res.send('查询失败')
      } else {
          res.send(ret)
      }
  })
});

module.exports = router;
