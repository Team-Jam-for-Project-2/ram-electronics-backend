// Dependencies =====================
const express = require('express');
const app = express();
app.set('port', process.env.PORT || 4000);
const cors = require('cors');
const path = require('path');

// Middleware ========================
// Converts json strings to the an object and attaches it to req.body
app.use(express.json());
// Parses key value pairs in request
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Log each request as it comes in for debugging - must be before controllers but after middleware that parses the request params into the request body
const requestLogger = require('./middleware/request_logger');
app.use(requestLogger);

// Redirect==========================
app.get('/', (req, res) => {
  res.redirect('/api');
});


//Controllers ===========================
// Item Controller 
const itemController = require('./controllers/Item');
app.use('/api/items', itemController);

// Cart Controller 
const cartController = require('./controllers/Cart');
app.use('/api/carts', cartController);


// User Controller
const userController = require('./controllers/User');
app.use('/api/user', userController);

//Port connection ===================

// Review Controller
const reviewController = require('./controllers/Review');
app.use('/api/reviews', reviewController);


app.listen(app.get('port'), () => {
  console.log(`PORT: ${app.get('port')}📺 `);
});
