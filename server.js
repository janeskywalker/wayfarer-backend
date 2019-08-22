const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
// const routes = require('./routes');

// ---------------------------------------- MIDDLEWARE ---------------------------------------- //

// BodyParser
app.use(bodyParser.urlencoded({ extended: false })); // for any form data
app.use(bodyParser.json()); // parse json data 

// Custom Logger Middleware
app.use((req, res, next) => {
  const url = req.url;
  const method = req.method;
  const requestedAt = new Date().toLocaleString();
//   console.table({ url, method, requestedAt });
  next(); // tell the requestion to ontinue to session 
});

// User Session -- allow creating user session
app.use(session({
  secret: 'top secret!',
  resave: false,
  saveUninitialized: false // Only save the session if a property has been added to req.session, only create a session when a user logged in
}));

// cors - cross regin origin 
const corsOptions = {
  origin: ['http://localhost:3000'], // string or array --  this is where the frontend is gonna call the route on this port
  credentials: true, // This allows the session cookie to be sent back and forth
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// ------------------------------------------ ROUTES ------------------------------------------ //

// GET Root Route
app.get('/', (req, res) => res.send('<h1>Welcome to wayfare API</h1>'));

// Auth Routes
// app.use('/api/v1/auth', routes.auth);

// Contacts Routes
// app.use('/api/v1/contacts', routes.contacts);

// Users Routes
// app.use('/api/v1/users', routes.users);


// ---------------------------------------- START SERVER ---------------------------------------- //

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
