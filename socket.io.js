const io = require('socket.io')
function getSocket(server, options) {
  let ios = io(server, options)
  ios.on('connection', client => {
    // console.log(client.id)
    ios.sockets.emit('addUser', {
      id: client.id,
      msg: '新用户加入'
    })
    client.on('sendMsg', (data) => {
      // console.log(data.to)
      client.to(data.to).emit('sendTargetMsg', {
        from: client.id,
        to: data.to,
        content: data.content
      })
    })
    // ios.on('sendMsg', client)
    // client.emit('event', {msg: 'data'})
    client.on('events', (data) => {
      console.log(data, '客户端连接')
    })
  })

  let qq = ios.of('/qq')
  qq.on('connection', client => {
    // qq.emit('news', {content: 'qq内容'})
    client.on('addRoom', data => {
      console.log(data)
      client.join(data.room)
    })
    // client.to()
    client.on('sendMsgRoom', data => {
      // console.log(data)
      client.emit('qunliao', data).to(data.room)
    })
  })


  let wx = ios.of('/wx')
  wx.on('connection', function () {
    wx.emit('news', {content: 'wx内容'})
  })
}


module.exports = getSocket