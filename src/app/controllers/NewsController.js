class NewsController {
  // [GET] /news
  index(req, res) {
    res.render('news');
  }

  // [GET] /:slug
  show(req, res) {
    res.send('Show details');
  }
}

module.exports = new NewsController();
