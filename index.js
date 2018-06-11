var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000;


app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));