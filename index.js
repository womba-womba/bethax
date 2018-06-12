var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000;


app.set('views', './views');
app.use(express.static('./public'));
app.set('view engine', 'pug');


app.get('/', function (req, res) {
  res.render('index')
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));