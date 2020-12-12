var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Colab Code - Realtime Pair Coding' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Colab Code - Realtime Pair Coding' });
});

router.route('/contact')
  .get(function(req, res, next) {
    res.render('contact', {title: 'Colab Code - Realtime Pair Coding'})
  })
  .post(function(req, res, next) {
    req.checkBody('name', 'Invalid name').notEmpty();
    req.checkBody('email', 'Invalid email').isEmail();
    req.checkBody('message', 'Empty message').notEmpty();

    var errors = req.validationErrors();

    if(errors) {
      res.render('contact', {
        title: 'Code4Share - a platform for sharing code.',
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        errorMessages: errors
      });
    } else {
      res.render('thank', { title: 'Code4Share - a platform for sharing code.'});
    }
  })

module.exports = router;
