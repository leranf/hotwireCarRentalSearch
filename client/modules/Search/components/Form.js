import React from 'react';
import { connect } from 'react-redux';
import Geosuggest from 'react-geosuggest';
import Calendar from 'react-input-calendar';
import TimeSelect from 'react-time-select';
import 'moment-range';
import { setPickUpLocation, setPickUpDate, setDropOffDate, setPickUpTime, setDropOffTime } from '../SearchActions';

const initialTime = new Date();
initialTime.setHours(12);
initialTime.setMinutes(0);

const mapDispatchToProps = dispatch => ({
  changePickUpLocation: location => dispatch(setPickUpLocation(location)),
  changePickUpDate: date => dispatch(setPickUpDate(date)),
  changeDropOffDate: date => dispatch(setDropOffDate(date)),
  changePickUpTime: time => dispatch(setPickUpTime(time)),
  changeDropOffTime: time => dispatch(setDropOffTime(time)),
});

const Form = ({ changePickUpLocation, changePickUpDate, changeDropOffDate, changePickUpTime, changeDropOffTime }) => (
  <div className="container">
    <h3>Search Hotwire Cars!!</h3>
    <table>
      <tr>Location</tr>
      <tr>
        <Geosuggest placeholder="Enter address" onSuggestSelect={suggest => changePickUpLocation(suggest.label)} />
      </tr>
      <tr>Pick up date</tr>
      <tr>
        <td><Calendar placeholder="Select Date" format="MM/DD/YYYY" computableFormat="MM/DD/YYYY" onChange={e => changePickUpDate(e)} /></td>
        <td><TimeSelect label="" value={initialTime} onChange={e => changePickUpTime(e.toTimeString().slice(0, 5))} /></td>
      </tr>
      <tr>Drop off date</tr>
      <tr>
        <td><Calendar placeholder="Select Date" format="MM/DD/YYYY" computableFormat="MM/DD/YYYY" onChange={e => changeDropOffDate(e)} /></td>
        <td><TimeSelect label="" value={initialTime} onChange={e => changeDropOffTime(e.toTimeString().slice(0, 5))} /></td>
      </tr>
    </table>
  </div>
);

Form.propTypes = {
  changePickUpLocation: React.PropTypes.func.isRequired,
  changePickUpDate: React.PropTypes.func.isRequired,
  changeDropOffDate: React.PropTypes.func.isRequired,
  changePickUpTime: React.PropTypes.func.isRequired,
  changeDropOffTime: React.PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
