const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const dbConnectionString = require('./config/config').dbConnectionString;
const CommentModel = require('./models/CommentModel');
const PostModel = require('./models/PostModel');

mongoose.connect(dbConnectionString);
const db = mongoose.connection;
db.on('error', (error) => { console.log('connection failed ', error); });
db.once('open', () => {
  console.log('connection successed');

  // let testComment = new CommentModel({
  //   from: 'alvin',
  //   commentValue: 'test123',
  // }).save((err, result) => {
  //   if (err) { console.log('testComment save failed：', err); }
  //   console.log('testComment save successed：', result);
  // });

  // let testPost = new PostModel({
  //   name: 'alvinyen219',
  //   content: 'lorem lorem lorem lorem lorem lorem lorem',
  // }).save((err, result) => {
  //   if (err) { console.log('testPost save failed', err); }
  //   console.log('testPost save successed', result);
  // });

  // let testPost2 = new PostModel(); // or let testPost2 = new PostModel
  // testPost2.name = 'daniel';
  // testPost2.save((err, result) => {
  //   if (err) { console.log('testPost2 save failed', err); }
  //   console.log('testPost2 save successed', result);
  // });

                      // 指定要query的欄位，沒有指定就不會出現
  PostModel.find({ name: 'alvinyen219' }, '_id name content', (err, postArray) => {
    if (err) { console.log('PostModel.find err：', err); }

    // 找不到會回傳空陣列！！記得驗證非空陣列！！
    console.log(postArray);

    console.log(typeof postArray[0].x); // 會回傳undefined
    console.log(postArray[0].x); // 會回傳undefined

    console.log(typeof postArray[0]._id);
    console.log(postArray[0]._id);

    const _idInStringType = postArray[0]._id.toString();
    console.log(typeof _idInStringType);
    console.log(_idInStringType);

    console.log(typeof postArray[0]._id.valueOf());
    console.log(postArray[0]._id.valueOf());

    console.log(postArray[0]._id.getTimestamp()); 

  });

});

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const server = http.createServer(app);
server.listen(3000, () => {
    console.log('server is running on port 3000');
});

