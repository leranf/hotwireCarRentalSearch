This is an app using Mongo, Express, React, and NodeJSt to simulate the experience of searching for a rental car using the public Hotwire API. 

## Quickstart

```
  fork and clone the repo
  cd your_new_app
  npm install
  npm start
```

**Note : Please make sure your MongoDB is running.** For MongoDB installation guide see [this](https://docs.mongodb.org/v3.0/installation/).

## Available Commands

1. `npm run start` - starts the development server with hot reloading enabled

2. `npm run bs` - bundles the code and starts the production server

3. `npm run test` - start the test runner

4. `npm run watch:test` - start the test runner with watch mode

5. `npm run coverage` - generates test coverage report

6. `npm run lint` - runs linter to check for lint errors

## File Structure

### Webpack Configs

This app uses Webpack for bundling modules. There are four types of Webpack configs provided `webpack.config.dev.js` (for development), `webpack.config.prod.js` (for production), `webpack.config.server.js` (for bundling server in production) and `webpack.config.babel.js` (for [babel-plugin-webpack-loaders](https://github.com/istarkov/babel-plugin-webpack-loaders) for server rendering of assets included through webpack).

### Server

This app uses express web framework, and sits in server.js where we check for NODE_ENV.

If NODE_ENV is development, Webpack middlewares are applied for bundling and Hot Module Replacement.

#### Server Side Rendering

React Router's match function is used for handling all page requests so that browser history works.

All routes are defined in `client/routes.js`. React Router renders components according to route requested.

**Note:** A new Redux Store has populated afresh on every request.

`fetchComponentData` is the essential function. The page is rendered and data is sent to the client for client-side rendering in `window.__INITIAL_STATE__`.

### Client

Client directory contains all the shared components, routes, modules.

#### components
This folder contains all the common components which are used throughout the project.

#### index.js
Index.js does client side rendering using the data provided from `window.__INITIAL_STATE__`.

#### modules
Modules are the way of organising different domain-specific modules in the project. A typical module contains the following
```
| - Search
  | - components // Sub components of this module
      | - Form.js
      | - Submit.js
  | - pages // React Router Pages from this module
      | - SearchPage.js
  | - SearchReducer.js
  | - SearchActions.js
```
## Misc

### ES6 support
We use babel to transpile code in both server and client with `stage-0` plugin. So, you can use both ES6 and experimental ES7 features.

### Docker
There are docker configurations for both development and production.

To run docker for development,
```
docker-compose -f docker-compose-development.yml build
docker-compose -f docker-compose-development.yml up
```

To run docker for production,
```
docker-compose build
docker-compose up
```

### Caveats

#### FOUC (Flash of Unstyled Content)
To make the hot reloading of CSS work, we are not extracting CSS in development. Ideally, during server rendering, we will be extracting CSS, and we will get a .css file, and we can use it in the html template. That's what we are doing in production.

In development, after all scripts get loaded, react loads the CSS as BLOBs. That's why there is a second of FOUC in development.

#### Client and Server Markup Mismatch
This warning is visible only on development and totally harmless. This occurs to hash difference in `react-router`. To solve it, react router docs asks you to use `match` function. If we use `match`, `react-hot-reloader` stops working.

## License
MERN is released under the [MIT License](http://www.opensource.org/licenses/MIT).
