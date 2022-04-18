const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const SortMiddleware = require('./app/middleware/SoftMiddleware');
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
  // for req.body in resquest
);
//javascipt
app.use(express.json());
//HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('.hbs', engine({
  extname: '.hbs', helpers: {
    sum: (a, b) => a + b,
    sortAble: (field, sort) => {
      const sortType = field === sort.column ? sort.type : 'default';
      const icons = {
        default: 'oi oi-elevator',
        asc: 'oi oi-sort-ascending',
        desc: 'oi oi-sort-descending'
      }
      const types = {
        default: 'desc',
        asc: 'desc',
        desc: 'asc'
      }

      const icon = icons[sortType];
      const type = types[sortType];

      return `<a class="ml-2" href="?_sort&column=${field}&type=${type}">
        <span class="${icon}"></span>
      </a > `;
    }
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Method-overridd
app.use(methodOverride('_method'));

//Custom middle ware
app.use(SortMiddleware);

// Routes init
route(app);

//Example midleware
// app.get('/midleware',
//   function (req, res, next) {
//     if (['normal-ticket', 'vip-ticket'].includes(req.query.ticket)) {
//       req.face = "slash slash!!!";
//       return next();
//     }
//     res.status(403).json({ message: "Access denied!!!" });
//   },
//   function (req, res, next) {
//     res.json({
//       message: "Successfully!!!",
//       face: req.face
//     })
//   }
// )

app.listen(port, () => {
  console.log(`App listening on port ${port} `);
});
