const initialState = {
  location: null,
  date: { pickUp: null, dropOff: null },
  time: { pickUp: null, dropOff: null },
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PICK_UP_LOCATION':
      return Object.assign({}, state, {
        location: action.payload,
      });
    case 'SET_PICK_UP_DATE':
      return Object.assign({}, state, {
        date: Object.assign({}, state.date, { pickUp: action.payload }),
      });
    case 'SET_DROP_OFF_DATE':
      return Object.assign({}, state, {
        date: Object.assign({}, state.date, { dropOff: action.payload }),
      });
    case 'SET_PICK_UP_TIME':
      return Object.assign({}, state, {
        time: Object.assign({}, state.time, { pickUp: action.payload }),
      });
    case 'SET_DROP_OFF_TIME':
      return Object.assign({}, state, {
        time: Object.assign({}, state.time, { dropOff: action.payload }),
      });
    default:
      return state;
  }
};

export default SearchReducer;
