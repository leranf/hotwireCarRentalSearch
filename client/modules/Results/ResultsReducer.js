const initialState = {
  isFetching: false,
  badRequest: false,
  carResults: null,
  carTypes: null,
};

const ResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CAR_RESULTS':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'SET_CAR_RESULTS':
      const carTypesObj = {};
      action.payload.carTypes.forEach(type => {
        carTypesObj[type.CarTypeCode] = type;
      });
      return Object.assign({}, state, {
        isFetching: false,
        carResults: action.payload.carResults,
        carTypes: carTypesObj,
        badRequest: false,
      });
    case 'ERROR_GETTING_CAR_RESULTS':
      return Object.assign({}, state, {
        isFetching: false,
        badRequest: true,
      });
    default:
      return state;
  }
};

export default ResultsReducer;
