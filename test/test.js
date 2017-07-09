/* global describe, it */

const app = require('../index');
const request = require('supertest').agent(app.listen());
