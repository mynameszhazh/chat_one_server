const io = require('socket.io')
const mongoose = require('mongoose');
await  mongoose.connect('mongodb://localhost/my_database');
const Schema = mongoose.Schema;
const chatUserList = new Schema({
  userName: { type: String, required: true },
  age: { type: Number, required: true },
  headImg: { type: String, required: true }
});
function socketUserChat(server, options = { cors: true}) {
  let ios = io(server, options)
  let WX = ios.of('/wx')
  WX.on('connection', client => {
    console.log('addd')
  })
}


module.exports = socketUserChat