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

// 注意这里和socket.io的最大区别就是这里需要数据请求，那个是建立连接这样，其他的应该都是可以，其他的外网这样，我应该搞一个服务好好玩一下的
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
