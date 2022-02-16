const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const myStoreCourse = require('./my-store');

function route(app) {
  app.use('/', siteRouter);
  app.use('/search', siteRouter);
  app.use('/news', newsRouter);
  app.use('/courses', coursesRouter);
  app.use('/my-store', myStoreCourse);
}

module.exports = route;
