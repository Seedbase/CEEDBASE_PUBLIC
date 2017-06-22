/**
 * Created by Dorcas Onuh on 2017-06-12.
 */
var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function (req,  res) {
    res.render('index');
});

app.get('/login', function (req, res) {
    res.send('login');
});

app.get('/opportunity-form', function (req, res) {
    res.send('jobform');
});

app.get('/admin', function (req, res) {
    res.send('admin');
});

app.get('/adminpanel', function (req, res) {
    res.send('admin-panel');
});

app.get('/users', function (req, res) {
    res.send('users');
});

app.get('/profile', function (req, res) {
    res.send('profile');
});

app.get('/terms-of-use', function (req, res) {
    res.send('termsOfUse');
});

app.listen(3000, function () {
    console.log('App listeniing on port 3000. test')
});
