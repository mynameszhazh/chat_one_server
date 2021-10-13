const mongoose = require('mongoose')

//  连接数据库
mongoose.connect('mongodb://localhost:27017/chat')

const chatUserList = new mongoose.Schema({
  userName: { type: String, required: true },
  age: { type: Number, required: true },
  headImg: { type: String, required: true }
});

// 3. 将文档发布为模型
// mongoose.model 方法就是用来将一个架构发布为model
//    第一个参数： 传入一个大写名词单数字符串来表示你的数据库名称
//    mongoose 会自动将大写名词的字符串生成 小写复数  的集合名称
//    第二个参数： 架构Schema
//    返回值： 模型构造函数
const userList = mongoose.model('userList', chatUserList)

module.exports = {
  userList
}

