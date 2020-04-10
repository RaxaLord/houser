require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');

const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

const app = express();
app.use(express.json());

const houses_controllers = require('../houses_controllers');

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set('db', db);
  console.log('db connected successfully');
});

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
  }),
);

app.get('/api/houses', houses_controllers.getAll);
app.post('/api/houses', houses_controllers.addHouse);
app.delete('/api/houses/:id', houses_controllers.deleteHouse);

app.listen(
  SERVER_PORT,
  console.log(`Server listening on port: ${SERVER_PORT}`),
);
