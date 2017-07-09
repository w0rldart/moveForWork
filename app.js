'use strict';

// Import dependencies
const path = require('path');
const render = require('koa-ejs');
const logger = require('koa-logger');

const Koa = require('koa');
const app = module.exports = new Koa();

// middleware
app.use(logger());

// Define whether the environment running is production or not
let isProduction = process.env.NODE_ENV === 'production';

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'template',
    viewExt: 'ejs',
    cache: isProduction,
    debug: !isProduction,
});

// Bind router
require('./lib/routes')(app);

if (process.env.NODE_ENV === 'test') {
    module.exports = app.callback();
} else {
    app.listen(7001);
    console.log('open http://localhost:7001');
}

app.on('error', function(err) {
    console.log(err.stack);
});
