![Logo](./src/assets/logo.png)

<p align="center">
  <a href="#getting-started">Getting Started</a> •
  <a href="#functionality">Functionality</a> •
  <a href="#tests">Tests</a> •
  <a href="#built-with">Built With</a> •
  <a href="#creators">Creators</a>
</p>

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![Build Status](https://travis-ci.org/Get-the-flight-out/EJ-frontend.svg?branch=master)](https://travis-ci.org/Get-the-flight-out/EJ-frontend)

<br>

## Overview
Get The Flight Out is an application designed to aid users with their travel needs. The user can find the lowest fare flights from their locale and find inspirational flights to top destinations around the world. This travel application provides the user the ability to not only find the lowest fare a particular location, but it also allows the user to see low fare flights to airports near their destination during their travel time. This feature will help our clients to explore their country of destination and/or countries near their destination in the most affordable way possible. Happy traveling!

## Getting Started
To use this application as a developer:
* First, make sure to setup the backend (Outlined in the [GTFO Backend](https://github.com/Get-the-flight-out/EJ-backend) directory)
* Install [NPM](https://www.npmjs.com/get-npm), [HTTPie](https://httpie.org/) and [MongoDB](https://docs.mongodb.com/manual/administration/install-enterprise/)
* Fork and clone this repository [GTFO](https://github.com/Get-the-flight-out/EJ-backend)
* Run `npm install` command in the repository directory to install all dependencies
* Run `npm start watch` in the terminal to start up the Webpack tools
* Navigate to `http://localhost:8080`


### Dependencies
`package.json`
```
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.18",
    "css-loader": "^0.28.10",
    "dotenv": "^5.0.0",
    "enzyme": "^3.3.0",
    "enzyme-adapter-react-16": "^1.1.1",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^1.1.9",
    "html-webpack-plugin": "^2.30.1",
    "jest": "^22.4.2",
    "json-loader": "^0.5.7",
    "node-sass": "^4.7.2",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.2.2",
    "redux": "^3.7.2",
    "sass-loader": "^6.0.6",
    "superagent": "^3.8.2",
    "uglifyjs-webpack-plugin": "^1.2.1",
    "url-loader": "^0.6.2",
    "uuid": "^3.2.1",
    "webpack": "^3.11.0",
    "webpack-dev-server": "^2.11.1"
  },
  "dependencies": {
    "cors": "^2.8.4",
    "express": "^4.16.2",
    "fuse-js-latest": "^3.1.0"
  }
```

`.dev.env`
```
CDN_URL=/
NODE_ENV=dev
API_URL=http://localhost:3000/api/v1
```

In order to run the tests, verify the backend is up and listening to requests first. This is outlined [here](https://github.com/Get-the-flight-out/EJ-backend) in the backend repository. Then, run `npm run test` to execute the test suite.

## Functionality
`/` Welcome page displays the ability for the user to signin or signup.
![main](./photos/main.png)
`/signin` Signin page allows the user to sign into GTFO
![signin](./photos/signin.png)
`/signup` Signup page allows the user to create an account, set their home airport and sign in
![signup](./photos/signup.png)
`/content` Content page displays the search options for finding flights. This is divided into a low fare flight search form and an inspirational flight search form. Results of the users search are displayed in a list below.
![content](./photos/content.png)
`/content` low fair search results
![searches](./photos/searchresults.png)
`/content` inspiration search
![inspiration](./photos/inspirationsearch.png)

## Tests
This project uses Travis-CI for continuous integration. Every Pull Request to the master branch is initiated will launch travis, which in turn runs Jest tests. Pull requests are not merged until all travis-ci tests pass.
```
 PASS  __test__/reducers/profile-reducer.test.js
  Profile reducer
    ✓ should return the initial state on first call (23ms)
    ✓ should return the payload with the type CLIENT_PROFILE_CREATE (3ms)
    ✓ should return the payload with the type CLIENT_PROFILE_ME (1ms)
    ✓ should return the payload with the type CLIENT_PROFILE_UPDATE (1ms)

 PASS  __test__/reducers/auth-reducer.test.js
  Auth reducer
    ✓ should return the initial state on first call (23ms)
    ✓ should handle TOKEN_SET (3ms)
    ✓ should handle TOKEN_DELETE (4ms)

 PASS  __test__/reducers/inspiration-reducer.test.js
  Inspiration reducer
    ✓ should return the initial state on first call (23ms)
    ✓ should handle an INSPIRATION_SEARCH request (2ms)
    ✓ should delete the store LOW_FARE_SEARCH type is encountered (2ms)

 PASS  __test__/actions/auth-actions.test.js
  Auth actions
    #tokenSet
      ✓ should create an action with type of CLIENT_PROFILE_ME (16ms)
      ✓ should create an action with a property email (2ms)
    #tokenDelete
      ✓ should create an action with type of TOKEN_DELETE (1ms)

 PASS  __test__/actions/inspiration-actions.test.js
  Inspiration actions
    ✓ should create an action with type of INSPIRATION_SEARCH (15ms)
    ✓ should create an action with a property origin (4ms)
    ✓ should create an action with a property duration (1ms)
    ✓ should create an action with the property max_price (1ms)

 PASS  __test__/actions/lowfare-actions.test.js
  Lowfare actions
    ✓ should create an action with type of LOW_FARE_SEARCH (15ms)
    ✓ should create an action with a property origin (4ms)
    ✓ should create an action with a property destination (2ms)
    ✓ should create an action with the property max_price (1ms)

 PASS  __test__/actions/profile-actions.test.js
  Profile actions
    ✓ should create an action with type of CLIENT_PROFILE_ME (14ms)
    ✓ should create an action with a property email (4ms)
    ✓ should create an action with a property name (1ms)
    ✓ should create an action with the property homeAirport (1ms)

 PASS  __test__/reducers/lowfare-reducer.test.js
  Lowfare reducer
    ✓ should return the initial state on first call (4ms)
    ✓ should return the payload with the type LOW_FARE_SEARCH (1ms)
    ✓ should return the null INSPIRATION_SEARCH

-------------------------|----------|----------|----------|----------|-------------------|
File                     |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------------|----------|----------|----------|----------|-------------------|
All files                |    41.33 |    51.52 |    31.03 |    45.61 |                   |
 action                  |    25.42 |        0 |       20 |    24.39 |                   |
  auth-actions.js        |     37.5 |      100 |       20 |    33.33 |... 19,23,26,27,29 |
  inspiration-actions.js |       15 |        0 |       20 |    15.38 |... 18,19,20,24,26 |
  lowfare-actions.js     |       20 |        0 |       20 |       20 |... 16,17,19,23,25 |
  profile-actions.js     |     37.5 |      100 |       20 |    33.33 |       10,11,13,14 |
 reducer                 |      100 |      100 |      100 |      100 |                   |
  auth.js                |      100 |      100 |      100 |      100 |                   |
  inspiration.js         |      100 |      100 |      100 |      100 |                   |
  lowfare.js             |      100 |      100 |      100 |      100 |                   |
  profile.js             |      100 |      100 |      100 |      100 |                   |
-------------------------|----------|----------|----------|----------|-------------------|
Test Suites: 8 passed, 8 total
Tests:       28 passed, 28 total
Snapshots:   0 total
Time:        5.55s
```

## Built With
* [Javascript](https://www.javascript.com/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Webpack](https://webpack.js.org/)
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

* Heath Smith
* Steve Carpenter
* Jordan Van Ness
* Liza Oh
