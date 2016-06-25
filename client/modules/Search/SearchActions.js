import callApi from '../../util/apiCaller';
import { getCarResults, setCarResults, errorGettingCarResults } from '../Results/ResultsActions';

export const setPickUpLocation = pickUplocation => ({
  type: 'SET_PICK_UP_LOCATION',
  payload: pickUplocation,
});

export const setPickUpDate = pickUpDate => ({
  type: 'SET_PICK_UP_DATE',
  payload: pickUpDate,
});

export const setDropOffDate = dropOffDate => ({
  type: 'SET_DROP_OFF_DATE',
  payload: dropOffDate,
});

export const setPickUpTime = pickUpTime => ({
  type: 'SET_PICK_UP_TIME',
  payload: pickUpTime,
});

export const setDropOffTime = dropOffTime => ({
  type: 'SET_DROP_OFF_TIME',
  payload: dropOffTime,
});

export const searchForCars = (location, date, time) =>
  dispatch => {
    dispatch(getCarResults());
    return callApi('searchHotwire', 'POST', {
      location,
      startDate: date.pickUp,
      endDate: date.dropOff,
      pickUpTime: time.pickUp,
      dropOffTime: time.dropOff,
    })
    .then(res => {
      dispatch(setCarResults(res));
    })
    .catch(err => {
      dispatch(errorGettingCarResults());
    });
  };
