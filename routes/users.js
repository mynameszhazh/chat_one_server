const express = require("express");
const router = express.Router();
// 这里获取的就是userList
const { userList } = require("../utils/mongodb/chat");

// 这里进行一个联系数据库简直就是完美的地方不是吗?
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/daa", function (req, res, next) {
  res.send("respond with a daa");
});

// 注意这里和socket.io的最大区别就是这里需要数据请求，那个是建立连接这样，其他的应该都是可以，其他的外网这样，我应该搞一个服务好好玩一下的
router.get("/list", function (req, res, next) {
  res.append("Access-Control-Allow-Origin", "*");
  res.append("Access-Control-Allow-Content-Type", "*");
  // 查询所有
  userList.find(function (err, ret) {
    if (err) {
      res.send("查询失败");
    } else {
      res.send(ret);
    }
  });
});

function getCurrentLocalData(name) {
  switch (name) {
    case "武冈市":
      return {
        transaction: {
          total: 15111.07,
          average: "4.5%",
          public_counter: 4,
          invitation_counter: 22,
        },
        type: {
          home: 4,
          gov: 5,
          observer: 7,
          other: 7,
        },
      };
    case "隆回县":
      return {
        transaction: {
          total: 15111.07,
          average: "4.5%",
          public_counter: 4,
          invitation_counter: 22,
        },
        type: {
          home: 4,
          gov: 5,
          observer: 7,
          other: 7,
        },
      };
  }
}

router.get("/deal", function (req, res, next) {
  res.append("Access-Control-Allow-Origin", "*");
  res.append("Access-Control-Allow-Content-Type", "*");
  // 查询所有
  const dataTotal = {
    transaction: {
      total: 233485.07,
      average: "5.25%",
      public_counter: 5,
      invitation_counter: 10,
    },
    type: {
      home: 83,
      gov: 62,
      observer: 4,
      other: 3,
    },
  };

  res.send(dataTotal);
});

router.get("/queryDeal", function (req, res, next) {
  res.append("Access-Control-Allow-Origin", "*");
  res.append("Access-Control-Allow-Content-Type", "*");
  // 查询所有
  console.log(req.params)
  res.send();
});

router.get("/bidTop", function (req, res, next) {
  res.append("Access-Control-Allow-Origin", "*");
  res.append("Access-Control-Allow-Content-Type", "*");
  // 查询所有
  const data = {
    bidTop_money: [
      {
        name: "湖南东达建设有限公司1",
        money: 27253,
      },
      {
        name: "湖南东达建设有限公司2",
        money: 3444,
      },
      {
        name: "湖南东达建设有限公司3",
        money: 2334,
      },
      {
        name: "湖南东达建设有限公司4",
        money: 353,
      },
      {
        name: "湖南东达建设有限公司5",
        money: 344,
      },
    ],
    bidTop_number: [
      {
        name: "湖南东达建设有限公司1",
        number: 1,
      },
      {
        name: "湖南东达建设有限公司2",
        number: 6,
      },
      {
        name: "湖南东达建设有限公司3",
        number: 4,
      },
      {
        name: "湖南东达建设有限公司4",
        number: 77,
      },
      {
        name: "湖南东达建设有限公司5",
        number: 5,
      },
    ],
  };
  res.send(data);
});

module.exports = router;
