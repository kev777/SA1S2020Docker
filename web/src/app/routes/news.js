const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/news', (req, res) => {
    connection.query('SELECT * FROM news', (err, result) => {
      res.render('news/news', {
        news: result
      });
    });
  });

  app.post('/news', (req, res) => {
    const { tweet } = req.body;
    console.log(req.body);
    connection.query('INSERT INTO news SET ? ',
      {
        tweet
      }
    , (err, result) => {
      res.redirect('/news');
    });
  });
};