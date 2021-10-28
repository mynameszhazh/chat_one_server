const io = require('socket.io')
const {userList} = require('../utils/mongodb/chat')

function chatSocket(server, options = {cors: true}) {
  let ios = io(server, options)
  ios.on('connection', client => {
    // 注意一个监听就是我传送过来的实例这样，发送的时候就需要ios出马了
    // console.log(typeof client.id)
    client.on('login', (data) => {
      const updatestr = {socketId: client.id, isOnline: true }
      userList.findByIdAndUpdate(data._id, updatestr, function (err, res) {
        if (err) {
          console.log("Error:" + err);
        } else {
          console.log("Res:" + res);
          client.emit('login', {
            state: 'ok',
            content: '登录成功'
          })
        }
      })
    })
  })
}

module.exports = chatSocket