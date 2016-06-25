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
### App Breakdown

#### Search
The main component of the search module is the Form, which allows the user to input the location they'd like to pick the car up from, as well as the date and time paramaters for pick-up and drop-off. Its purpose is to collect the data needed to make a request to the Hotwire API.

For modularity, the submit button is its own component, and imported as a child of the Form component (thanks to React). Clicking the submit button sets off a chain of events that makes the API request, and then sets results property values within the redux store.

React/Redux is a very convenient combination of technology to use in this case because any time there is a change within one of the input fields, I can simply dispatch an action to modify that property's value within the redux store. Those store (state) values are passed to the Submit component, and upon click, dispatches an action that makes the API request with the paramaters passed to the function. This helps create a very intuitive seperation of concerns between the components. 

#### Results
Results has two components, the ResultsList, and a ResultsListItem. The ResultsList is a simple component that receives an array of the results returned from the API request, and maps those results to a set of ResultsListItems.
Each ResultListItem is passed its specific property values, and formatted cleanly for the user to see.

Again React/Redux help make the code very clean, modular, and easy to understand. Redux allows me to feed the results from the API request straight to the ResultsList component, and React/JSX syntax allows me to create a ResultListItem component for each result. Within the ResultListItem, I also pass in the carTypes object from the redux store, to extract more specific information about the particular car result.

#### API Request to Hotwire
The API request is handled on the server side to avoid making cross-origin requests. The SearchAction 'searchForCars' sends a POST request to my RESTful API, passing the paramaters of the query to Hotwire through the request body. Once my server recieves a response from the Hotwire API, it sends back the data as a JSON object, or if it fails, sends back a 400 error that gets handled on the client side, initiating the user to modify their search criteria.

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
