<h2 align="center">Get the Flight Out</h2>

<!-- TODO: add logo -->

<p align="center">
  <a href="#getting-started">Getting Started</a> •
  <a href="#functionality">Functionality</a> •
  <a href="#tests">Tests</a> •
  <a href="#built-with">Built With</a> •
  <a href="#creators">Creators</a>
</p>

[![forthebadge](https://forthebadge.com/images/badges/fuck-it-ship-it.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![Build Status](https://travis-ci.org/Get-the-flight-out/EJ-frontend.svg?branch=master)](https://travis-ci.org/Get-the-flight-out/EJ-frontend)

<br>

<!-- TODO: add travis badge -->

## Overview
GTFO is an application designed to aid users with their travel needs. The user can find the lowest fare flights from their local and find inspirational flights to top destinations around the world. This travel application provides the user the ability to not only find the lowest fare to one location, it allows the user to see low fare flights to airports near their destination during their travel time. This feature will help our clients to explore their country of destination and/or countries near their destination in the most affordable way possible. Happy traveling!

## Getting Started
To use this application as a developer:
* Install [NPM](https://www.npmjs.com/get-npm), [HTTPie](https://httpie.org/) and [MongoDB](https://docs.mongodb.com/manual/administration/install-enterprise/)
* Fork and clone this repository [GTFO](https://github.com/Get-the-flight-out/EJ-backend)
<!-- change this if we change the repo names -->
* NPM init your project
* Add .gitignore and .travis.yml files
* Add the following dependencies

<!-- TODO: change depending what dependencies we need -->

```
  "dependencies": {
    "bcrypt": "^1.0.3",
    "body-parser": "^1.18.2",
    "cors": "^2.8.4",
    "debug": "^3.1.0",
    "del": "^3.0.0",
    "dotenv": "^5.0.0",
    "eslint": "^4.17.0",
    "express": "^4.16.2",
    "faker": "^4.1.0",
    "jest": "^22.1.4",
    "jsonwebtoken": "^8.1.1",
    "mongoose": "^5.0.3",
    "superagent": "^3.8.2"
```
* Add the following .env files

<!-- TODO: add .test.env -->

.dev.env
```
CDN_URL=/
NODE_ENV=dev
API_URL=http://localhost:3000/api/v1
```
* Start your server using nodemon or npm run start:watch
* Connect to your database using npm run start-db
* Open Mongo in the terminal, if needed.


## Functionality


## Route Examples

Examples using HTTPie

## Tests
This project uses Travis-CI for continuous integration. Every Pull Request to the master branch is initiated will launch travis, which in turn runs Jest tests. Pull requests are not merged until all travis-ci tests pass.

## Built With

* [Javascript](https://www.javascript.com/)
* [npm](https://www.npmjs.com/)
* [Jest](https://www.npmjs.com/package/jest)
* [Body-parser](https://www.npmjs.com/package/body-parser)
* [Cors](https://www.npmjs.com/package/cors)
* [Express](https://www.npmjs.com/package/express)
* [jsonwebtoken](https://www.npmjs.com/package/json-web-token)
* [Mongoose](http://mongoosejs.com/docs/api.html)
* [Faker](https://www.npmjs.com/package/Faker)
* [Superagent](https://www.npmjs.com/package/superagent)

## Creators
The Creators of Get the Flight Out!

<!-- TODO: need some pics, bios, GH and Linkedin links! -->

* Heath
* Steve
* Jordan
* Liza
