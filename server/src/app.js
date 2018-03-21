require('dotenv').config({ path: '.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const Sequelize = require('sequelize');
const routes = require('../routes');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.use('/', routes);
app.set('port', process.env.PORT);

const sequelize = new Sequelize('database', 'root', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  storage: './database.sqlite',
});

sequelize
  .authenticate()
  .then(() => console.log('Connected!'))
  .catch(err => console.error('Unable to connect :(', err));

sequelize
  .sync()
  .then(() => app.listen(app.get('port')));
