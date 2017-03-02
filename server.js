const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('views', './views');
app.use(express.static('./public'));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

// Register Routes
app.get('/', function(req, res) {
  res.render('index');
});

app.listen(PORT);
console.log('App listening on %d', PORT);

module.exports = app;
