const initialState = {
  isfetching: false,
  carResults: null,
  carTypes: null
};

const ResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CAR_RESULTS':
      return Object.assign({}, state, {
        isfetching: true 
      });
    case 'SET_CAR_RESULTS':
      return Object.assign({}, state, {
        isfetching: false,
        carResults: action.payload.carResults,
        carTypes: action.payload.carTypes
      });
    default:
      return state;
  }
}

export default ResultsReducer;