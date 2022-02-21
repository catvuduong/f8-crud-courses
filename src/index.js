const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

//Connect db
db.connect();
app.use(express.static(path.join(__dirname, '/public')));
//Middle ware
//form data
app.use(
  express.urlencoded({
    extended: true,
  }),
);
//javascipt
app.use(express.json());
//HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('.hbs', engine({ extname: '.hbs', helpers: { sum: (a, b) => a + b } }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Method-overridd
app.use(methodOverride('_method'));
// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
