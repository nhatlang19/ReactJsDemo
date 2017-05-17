const express = require('express'); // gọi express ra xài

const app = express(); // using express

app.set('view engine', 'ejs'); // using ejs engine
app.set('views', './views'); // all templates
app.use(express.static('public')); // tất cả mọi request từ kh gửi lên đi vào public
app.listen(3000, () => {
  console.log('Server started');
});
app.get('/', (req, res) => {
  res.render('home');
});
