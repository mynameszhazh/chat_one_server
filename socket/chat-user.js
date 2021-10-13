const io = require('socket.io')
const { userList } = require('../utils/mongodb/chat')
function chatSocket(server,options = {cors: true}) {
  let ios = io(server, options)
  ios.on('connection', client => {
    // console.log(11)
    // 注意一个监听就是我传送过来的实例这样，发送的时候就需要ios出马了
    client.on('login', (data) => {
      // console.log(data)
      console.log('用户登录成功')
      // userList.find() {
      //
      // }
    })
  })
}

module.exports = chatSocket