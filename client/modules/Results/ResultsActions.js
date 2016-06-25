export const setCarResults = results => ({
  type: 'SET_CAR_RESULTS',
  payload: results,
});

export const getCarResults = () => ({
  type: 'GET_CAR_RESULTS',
});

export const errorGettingCarResults = () => ({
  type: 'ERROR_GETTING_CAR_RESULTS',
});