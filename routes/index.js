var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
var config = require('../config');
var transporter = nodemailer.createTransport(config.mailer);

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
      var mailOptions = {
        from: 'jamesnguyen1stth@gmail.com',
        to: 'jamesnguyen88th@gmail.com',
        subject: 'New message from visitor',
        text: req.body.message
      }
      
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      }
      res.render('thank', { title: 'Colab Code - pair coding makes simple.'});
    })
  })

  router.get('/login', function (req, res, next) {
    res.render('login', {title: 'Login'});
  })

    router.get('/register', function (req, res, next) {
    res.render('register', {title: 'Register new account!'});
  })

module.exports = router;
