const express = require('express');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const sibApiV3Sdk = require('sendinblue-api');
require('dotenv').config();

const server = express();
server.use(express.json());

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),

  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256'],
});

server.use(checkJwt);