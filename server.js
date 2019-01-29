const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const app = express();

// set our favicon
app.use(favicon(path.join(__dirname, 'dist', 'app', 'images', 'favicon.ico')));

// setup our middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set up our view engine
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// specify where we'll be getting our assets
app.use(express.static(path.join(__dirname, 'dist', 'app')));

// set up our routes
app.use('/', require('./routers/root'));
// API endpoints
app.use('/get-collections', require('./routers/get-collections'));
app.use('/get-watches', require('./routers/get-watches'));
app.use('/get-bags', require('./routers/get-bags'));

app.listen((process.env.PORT || 3000), () => {
    console.log('Kennedy is live at port 3000.');
});