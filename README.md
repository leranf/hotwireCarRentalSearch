This is an app using Mongo, Express, React, and NodeJSt to simulate the experience of searching for a rental car using the public Hotwire API. 

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
The main component of the search module is the Form, which allows the user to input the location they'd like to pick the car up from, as well as the date and time parameters for pick-up and drop-off. Its purpose is to collect the data needed to make a request to the Hotwire API.

For modularity, the submit button is its own component, and imported as a child of the Form component (thanks to React). Clicking the submit button sets off a chain of events that makes the API request, and then sets results property values within the redux store.

React/Redux is a very convenient combination of technology to use in this case because any time there is a change within one of the input fields, I can simply dispatch an action to modify that property's value within the redux store. Those store (state) values are passed to the Submit component, and upon click, dispatches an action that makes the API request with the parameters passed to the function. This helps create a very intuitive seperation of concerns between the components. 

#### Results
Results has two components, the ResultsList, and a ResultsListItem. The ResultsList is a simple component that receives an array of the results returned from the API request, and maps those results to a set of ResultsListItems.
Each ResultsListItem is passed its specific property values, and formatted cleanly for the user to see.

Again React/Redux helps make the code very clean, modular, and easy to understand. Redux allows me to feed the results from the API request straight to the ResultsList component, and React/JSX syntax allows me to create a ResultsListItem component for each result. I also pass in the carTypes object from the redux store to the ResultsListItem component in order to extract more specific information about the particular car result.

#### API Request to Hotwire
The API request is handled on the server side to avoid making cross-origin requests. The SearchAction 'searchForCars' sends a POST request to my RESTful API, passing the parameters of the query to Hotwire through the request body. Once my server recieves a response from the Hotwire API, it sends back the data as a JSON object, or if it fails, sends back a 400 error. Back on the client side, results data is either rendered to the page or the user is initiated to modify their search criteria.

## Misc

I ran into some complications due to the fact that I used a boilerplate to architect the skeleton of the application.
  - I wanted to use react-geosuggest and react-input-calendar in my Form component, but the styling was not being applied correctly. This would have made for a much more intuitive user experience.
  - I was not able to deploy the app successfully. 

## License
MERN is released under the [MIT License](http://www.opensource.org/licenses/MIT).
