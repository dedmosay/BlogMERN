const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));


// const express = require('express');
// // позволяет серверу читать данные, которые были переданы методом POST
// const bodyParser = require('body-parser'); 
// const app = express();

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// const PORT = 3333;
// const posts = [
//     {
//         title: "0 H W",
//         text: "Just text"
//     },
//     {
//         title: "1 H W",
//         text: "Just text"
//     },
//     {
//         title: "2 H W",
//         text: "Just text"
//     },
//     {
//         title: "3 H W",
//         text: "Just text"
//     }
// ];
// // get - получает 2 параметра (маршрут, анонимная функция([вся инфа о запросе], [хранит все методы для передачи ответа] ))
// app.get('/posts', function(req, res) {
//     return res.send(posts);
// });

// // этот метод позволяет обратиться по ID
// app.get('/posts/:id', function(req, res){
//     const id = req.params.id;
//     return res.send(posts[id]);
// });

// app.post('/posts', function(req, res){
//     const data = req.body;  // здесь будут появляться данные отправленные методом POST
//     console.log(data);
//     posts.push(data);       // сохраняем эти данные в POST
//     return res.send(posts);
// });

// app.listen(PORT, console.log(`port ${PORT}`));